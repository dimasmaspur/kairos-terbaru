const Validator = require('fastest-validator');
const v = new Validator();
const { Quotation, QuotationInvoice } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        item_cost: 'string|empty:false',
        unit: 'string|empty:false',
        currency: 'string|empty:false'
    }

    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const quo = await Quotation.findOne({ where: { quo_number: req.body.quo_number } });
    if (!quo) {
        return res.status(404).json({ status: 'error', message: 'Quo Number not found' });
    }


    const data = {
        quo_number: quo.quo_number,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        note: req.body.note,
        amount_IDR: req.body.currency === 'IDR' ? req.body.quantity * req.body.price : 0,
        amount_USD: req.body.currency === 'USD' ? req.body.quantity * req.body.price : 0,
    };

    try {
        const quotationInvoice = await QuotationInvoice.create(data);

        return res.json({
            status: "success",
            data: {
                id: quotationInvoice.id,
                quo_number: quotationInvoice.quo_number,
                item_cost: quotationInvoice.item_cost,
                unit: quotationInvoice.unit,
                quantity: quotationInvoice.quantity,
                price: quotationInvoice.price,
                currency: quotationInvoice.currency,
                note: quotationInvoice.note,
                amount_IDR: quotationInvoice.amount_IDR,
                amount_USD: quotationInvoice.amount_USD,
                created_at: quotationInvoice.createdAt,
                updated_at: quotationInvoice.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

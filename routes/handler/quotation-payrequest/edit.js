const Validator = require('fastest-validator');
const v = new Validator();
const { QuotationPayrequest } = require('../../../models');

module.exports = async (req, res, next) => {
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

    const data = {
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        vendor: req.body.vendor,
        amount_IDR: req.body.currency === 'IDR' ? req.body.quantity * req.body.price : 0,
        amount_USD: req.body.currency === 'USD' ? req.body.quantity * req.body.price : 0,
    };


    const id = req.params.id;
    const quotation = await QuotationPayrequest.findByPk(id);
    if (!quotation) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await QuotationPayrequest.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                quo_number: quotation.quo_number,
                item_cost: data.item_cost,
                unit: data.unit,
                quantity: data.quantity,
                price: data.price,
                currency: data.currency,
                vendor: data.vendor,
                amount_IDR: quotation.amount_IDR,
                amount_USD: quotation.amount_USD,
                created_at: quotation.createdAt,
                updated_at: quotation.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
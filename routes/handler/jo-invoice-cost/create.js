const Validator = require('fastest-validator');
const v = new Validator();
const { InvoiceCost, Invoice } = require('../../../models');

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

    const idinvoice = await Invoice.findOne({ where: { id_invoice: req.body.id_invoice } });
    if (!idinvoice) {
        return res.status(404).json({ status: 'error', message: 'id invoice not found' });
    }

    const data = {
        id_invoice: idinvoice.id_invoice,
        kode: req.body.kode,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const invoiceCost = await InvoiceCost.create(data);

        return res.json({
            status: "success",
            data: {
                id: invoiceCost.id,
                id_invoice: idinvoice.id_invoice,
                kode: invoiceCost.kode,
                item_cost: invoiceCost.item_cost,
                unit: invoiceCost.unit,
                quantity: invoiceCost.quantity,
                price: invoiceCost.price,
                currency: invoiceCost.currency,
                flag_ppn: invoiceCost.flag_ppn,
                note: invoiceCost.note,
                created_at: invoiceCost.createdAt,
                updated_at: invoiceCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

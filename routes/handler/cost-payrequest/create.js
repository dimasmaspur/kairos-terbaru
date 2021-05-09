const Validator = require('fastest-validator');
const v = new Validator();
const { PayRequestJo, CostPayRequest } = require('../../../models');

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

    const idPayRequestJo = await PayRequestJo.findOne({ where: { id_payrequest: req.body.id_payrequest } });
    if (!idPayRequestJo) {
        return res.status(404).json({ status: 'error', message: 'id payrequest not found' });
    }

    const data = {
        id_payrequest: idPayRequestJo.id_payrequest,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const costPayRequest = await CostPayRequest.create(data);

        return res.json({
            status: "success",
            data: {
                id_debit_cost: costPayRequest.id_debit_cost,
                id_credit_note: idPayRequestJo.id_credit_note,
                item_cost: costPayRequest.item_cost,
                unit: costPayRequest.unit,
                quantity: costPayRequest.quantity,
                price: costPayRequest.price,
                currency: costPayRequest.currency,
                flag_ppn: costPayRequest.flag_ppn,
                note: costPayRequest.note,
                created_at: costPayRequest.createdAt,
                updated_at: costPayRequest.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

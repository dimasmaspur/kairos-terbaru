const Validator = require('fastest-validator');
const v = new Validator();
const { JocPayRequest, JocPayRequestCost } = require('../../../models');

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

    const idPayrequest = await JocPayRequest.findOne({ where: { id_payrequest: req.body.id_payrequest } });
    if (!idPayrequest) {
        return res.status(404).json({ status: 'error', message: 'id payrequest not found' });
    }



    const data = {
        id_payrequest: idPayrequest.id_payrequest,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const jocPayRequestCost = await JocPayRequestCost.create(data);

        return res.json({
            status: "success",
            data: {
                id: jocPayRequestCost.id_payrequest_cost,
                id_payrequest: idPayrequest.id_payrequest,
                item_cost: jocPayRequestCost.item_cost,
                unit: jocPayRequestCost.unit,
                quantity: jocPayRequestCost.quantity,
                price: jocPayRequestCost.price,
                currency: jocPayRequestCost.currency,
                flag_ppn: jocPayRequestCost.flag_ppn,
                note: jocPayRequestCost.note,
                created_at: jocPayRequestCost.createdAt,
                updated_at: jocPayRequestCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

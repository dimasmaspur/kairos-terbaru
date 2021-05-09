const Validator = require('fastest-validator');
const v = new Validator();
const { JoCreditNote, CreditNoteCost } = require('../../../models');

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
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };


    const id = req.params.id;
    const creditNoteCost = await CreditNoteCost.findByPk(id);
    if (!creditNoteCost) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id_credit_cost: id }
    };

    try {
        await CreditNoteCost.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id_credit_cost: id,
                id_credit_note: creditNoteCost.id_credit_note,
                item_cost: data.item_cost,
                unit: data.unit,
                quantity: data.quantity,
                price: data.price,
                currency: data.currency,
                flag_ppn: data.flag_ppn,
                note: data.note,
                created_at: creditNoteCost.createdAt,
                updated_at: creditNoteCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
const Validator = require('fastest-validator');
const v = new Validator();
const { JocRebateIncome, RebateIncomeCost } = require('../../../models');

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

    const idRebate = await JocRebateIncome.findOne({ where: { id_rebate_income: req.body.id_rebate_income } });
    if (!idRebate) {
        return res.status(404).json({ status: 'error', message: 'id rebate income note not found' });
    }

    const data = {
        id_rebate_income: idRebate.id_rebate_income,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const rebateIncomeCost = await RebateIncomeCost.create(data);

        return res.json({
            status: "success",
            data: {
                id: rebateIncomeCost.id,
                id_rebate_income: idRebate.id_rebate_income,
                item_cost: rebateIncomeCost.item_cost,
                unit: rebateIncomeCost.unit,
                quantity: rebateIncomeCost.quantity,
                price: rebateIncomeCost.price,
                currency: rebateIncomeCost.currency,
                flag_ppn: rebateIncomeCost.flag_ppn,
                note: rebateIncomeCost.note,
                created_at: rebateIncomeCost.createdAt,
                updated_at: rebateIncomeCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

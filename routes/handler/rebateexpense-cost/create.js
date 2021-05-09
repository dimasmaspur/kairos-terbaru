const Validator = require('fastest-validator');
const v = new Validator();
const { JocRebateExpense, RebateExpenseCost } = require('../../../models');

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

    const idRebate = await JocRebateExpense.findOne({ where: { id_rebate_expense: req.body.id_rebate_expense } });
    if (!idRebate) {
        return res.status(404).json({ status: 'error', message: 'id rebate expense note not found' });
    }



    const data = {
        id_rebate_expense: idRebate.id_rebate_expense,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const rebateExpenseCost = await RebateExpenseCost.create(data);

        return res.json({
            status: "success",
            data: {
                id: rebateExpenseCost.id,
                id_rebate_expense: idRebate.id_rebate_expense,
                item_cost: rebateExpenseCost.item_cost,
                unit: rebateExpenseCost.unit,
                quantity: rebateExpenseCost.quantity,
                price: rebateExpenseCost.price,
                currency: rebateExpenseCost.currency,
                flag_ppn: rebateExpenseCost.flag_ppn,
                note: rebateExpenseCost.note,
                created_at: rebateExpenseCost.createdAt,
                updated_at: rebateExpenseCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

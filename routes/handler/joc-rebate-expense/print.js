const { JocRebateExpense, RebateExpenseCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const jocRebateExpense = await JocRebateExpense.findByPk(id);

    if (!jocRebateExpense) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const rebateExpenseCost = await RebateExpenseCost.findAll({
        where: {
            id_rebate_expense: jocRebateExpense.id_rebate_expense
        }
    });

    // res.send({ JocRebateExpense });
    return res.json({
        status: 'success',
        data: {
            id_rebate_expense: jocRebateExpense.id_rebate_expense,
            joc_number: jocRebateExpense.joc_number,
            agent_name: jocRebateExpense.agent_name,
            no_blanko: jocRebateExpense.no_blanko,
            ppn_idr: jocRebateExpense.ppn_idr,
            ppn_usd: jocRebateExpense.ppn_usd,
            created_at: jocRebateExpense.createdAt,
            updated_at: jocRebateExpense.updatedAt,
            rebateExpenseCost
        }

    });
}
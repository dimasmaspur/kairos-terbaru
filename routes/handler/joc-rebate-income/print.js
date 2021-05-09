const { JocRebateIncome, RebateIncomeCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const jocRebateIncome = await JocRebateIncome.findByPk(id);

    if (!jocRebateIncome) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const rebateIncomeCost = await RebateIncomeCost.findAll({
        where: {
            id_rebate_income: jocRebateIncome.id_rebate_income
        }
    });

    // res.send({ JocRebateIncome });
    return res.json({
        status: 'success',
        data: {
            id_rebate_income: jocRebateIncome.id_rebate_income,
            joc_number: jocRebateIncome.joc_number,
            agent_name: jocRebateIncome.agent_name,
            no_blanko: jocRebateIncome.no_blanko,
            ppn_idr: jocRebateIncome.ppn_idr,
            ppn_usd: jocRebateIncome.ppn_usd,
            created_at: jocRebateIncome.createdAt,
            updated_at: jocRebateIncome.updatedAt,
            rebateIncomeCost
        }

    });
}
const { JobConsol, JocPayRequest,JocPayRequestCost,RebateExpenseCost, JocRebateExpense,RebateIncomeCost, JocRebateIncome,JocConsol } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const jobConsol = await JobConsol.findByPk(id);

    if (!jobConsol) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const jocPayRequest = await JocPayRequest.findAll({
        where: {
            joc_number: jobConsol.joc_number
        },
        include: [JocPayRequestCost]
    });
    const jocRebateExpense = await JocRebateExpense.findAll({
        where: {
            joc_number: jobConsol.joc_number
        },
        include: [RebateExpenseCost]
    });
    const jocRebateIncome = await JocRebateIncome.findAll({
        where: {
            joc_number: jobConsol.joc_number
        },
        include: [RebateIncomeCost]
    });
    const jocData = await JocConsol.findAll({
        where: {
            joc_number: jobConsol.joc_number
        }
    });
  
    return res.json({
        status: 'success',
        data: {
            id: jobConsol.id,
            joc_number: jobConsol.joc_number,
            type: jobConsol.type,
            no_bl: jobConsol.no_bl,
            no_mbl: jobConsol.no_mbl,
            vessel: jobConsol.vessel,
            carrier: jobConsol.carrier,
            no_container: jobConsol.no_container,
	    qty_container: jobConsol.qty_container,
            creator: jobConsol.creator,
            branch_office: jobConsol.branch_office,
            type_container: jobConsol.type_container,
            agent: jobConsol.agent,
            loading: jobConsol.loading,
            discharge: jobConsol.discharge,
            ETD: jobConsol.ETD,
            ETA: jobConsol.ETA,
            quantity: jobConsol.quantity,
            weight: jobConsol.weight,
            measurement: jobConsol.measurement,
            createdAt: jobConsol.createdAt,
            updatedAt: jobConsol.updatedAt,
            jocPayRequest,
            jocRebateExpense,
            jocRebateIncome,
            jocData
    
        }

    });
}

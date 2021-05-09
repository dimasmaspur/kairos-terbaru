const Validator = require('fastest-validator');
const v = new Validator();
const { JocRebateExpense } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        no_blanko: 'string|empty:false',
        agent_name: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        agent_name: req.body.agent_name
    };


    const id = req.params.id;
    const jocRebateExpense = await JocRebateExpense.findByPk(id);
    if (!jocRebateExpense) {
        return res.status(404).json({ status: 'error', message: 'id debit note not found' });
    }
    const selector = {
        where: { id_rebate_expense: id }
    };

    try {
        await jocRebateExpense.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id_rebate_expense: id,
                joc_number: jocRebateExpense.joc_number,
                no_blanko: data.no_blanko,
                ppn_idr: data.ppn_idr,
                ppn_usd: data.ppn_usd,
                agent_name: data.agent_name,
                created_at: jocRebateExpense.createdAt,
                updated_at: jocRebateExpense.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
const Validator = require('fastest-validator');
const v = new Validator();
const { JocRebateIncome, JobConsol } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        joc_number: 'string|empty:false',
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

    const joc = await JobConsol.findOne({ where: { joc_number: req.body.joc_number } });
    if (!joc) {
        return res.status(404).json({ status: 'error', message: 'Job Consol Number not found' });
    }



    const data = {
        joc_number: joc.joc_number,
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        agent_name: req.body.agent_name
    };

    try {
        const jocRebateIncome = await JocRebateIncome.create(data);

        return res.json({
            status: "success",
            data: {
                id_rebate_income: jocRebateIncome.id_rebate_income,
                joc_number: jocRebateIncome.joc_number,
                no_blanko: jocRebateIncome.no_blanko,
                ppn_idr: jocRebateIncome.ppn_idr,
                ppn_usd: jocRebateIncome.ppn_usd,
                agent_name: jocRebateIncome.agent_name,
                created_at: jocRebateIncome.createdAt,
                updated_at: jocRebateIncome.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

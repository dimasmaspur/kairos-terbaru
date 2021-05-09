const { PayRequestJo, CostPayRequest } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const payRequestJo = await PayRequestJo.findByPk(id);

    if (!payRequestJo) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const payRequestCost = await CostPayRequest.findAll({
        where: {
            id_payrequest: payRequestJo.id_payrequest
        }
    });

    // res.send({ PayRequestJo });
    return res.json({
        status: 'success',
        data: {
            id_debit_note: payRequestJo.id,
            jo_number: payRequestJo.jo_number,
            agent_name: payRequestJo.agent_name,
            no_blanko: payRequestJo.no_blanko,
            ppn_idr: payRequestJo.ppn_idr,
            ppn_usd: payRequestJo.ppn_usd,
            created_at: payRequestJo.createdAt,
            updated_at: payRequestJo.updatedAt,
            payRequestCost
        }

    });
}
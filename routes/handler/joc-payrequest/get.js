const { JocPayRequest, JocPayRequestCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const jocPayRequest = await JocPayRequest.findByPk(id);

    if (!jocPayRequest) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const jocPayRequestCost = await JocPayRequestCost.findAll({
        where: {
            id_payrequest: jocPayRequest.id_payrequest
        }
    });

    // res.send({ jocPayRequest });
    return res.json({
        status: 'success',
        data: {
            id_payrequest: jocPayRequest.id_payrequest,
            joc_number: jocPayRequest.joc_number,
            vendor_name: jocPayRequest.vendor_name,
            no_blanko: jocPayRequest.no_blanko,
            ppn_idr: jocPayRequest.ppn_idr,
            ppn_usd: jocPayRequest.ppn_usd,
            created_at: jocPayRequest.createdAt,
            updated_at: jocPayRequest.updatedAt,
            jocPayRequestCost
        }

    });
}

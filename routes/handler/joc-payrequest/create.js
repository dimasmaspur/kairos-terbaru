const Validator = require('fastest-validator');
const v = new Validator();
const { JocPayRequest, JobConsol } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        joc_number: 'string|empty:false',
        no_blanko: 'string|empty:false',
        vendor_name: 'string|empty:false'
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
        vendor_name: req.body.vendor_name
    };

    try {
        const jocPayRequest = await JocPayRequest.create(data);

        return res.json({
            status: "success",
            data: {
                id_payrequest: jocPayRequest.id_payrequest,
                joc_number: jocPayRequest.joc_number,
                no_blanko: jocPayRequest.no_blanko,
                ppn_idr: jocPayRequest.ppn_idr,
                ppn_usd: jocPayRequest.ppn_usd,
                vendor_name: jocPayRequest.vendor_name,
                created_at: jocPayRequest.createdAt,
                updated_at: jocPayRequest.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

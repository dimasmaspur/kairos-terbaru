const Validator = require('fastest-validator');
const v = new Validator();
const { JocPayRequest } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
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

    const data = {
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        vendor_name: req.body.vendor_name
    };


    const id = req.params.id;
    const jocPayRequest = await JocPayRequest.findByPk(id);
    if (!jocPayRequest) {
        return res.status(404).json({ status: 'error', message: 'id debit note not found' });
    }
    const selector = {
        where: { id_payrequest: id }
    };

    try {
        await jocPayRequest.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id_payrequest: id,
                joc_number: jocPayRequest.joc_number,
                no_blanko: data.no_blanko,
                ppn_idr: data.ppn_idr,
                ppn_usd: data.ppn_usd,
                vendor_name: data.vendor_name,
                created_at: jocPayRequest.createdAt,
                updated_at: jocPayRequest.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
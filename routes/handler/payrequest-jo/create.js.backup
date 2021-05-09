const Validator = require('fastest-validator');
const v = new Validator();
const { PayRequestJo, JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        jo_number: 'string|empty:false',
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

    const jo = await JobOrder.findOne({ where: { jo_number: req.body.jo_number } });
    if (!jo) {
        return res.status(404).json({ status: 'error', message: 'JO Number not found' });
    }
    // const checkJoNumber = await PayRequestJo.findOne({ where: { jo_number: req.body.jo_number } });
    // if (checkJoNumber) {
    //     return res.status(400).json({ status: 'error', message: 'JO Number already exists!' });
    // }

    // const noBlanko = await PayRequestJo.findOne({ where: { no_blanko: req.body.no_blanko } });
    // if (noBlanko) {
    //     return res.status(400).json({ status: 'error', message: 'no blanko already exists!' });
    // }

    const data = {
        jo_number: jo.jo_number,
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        vendor_name: req.body.vendor_name
    };

    try {
        const payRequestJo = await PayRequestJo.create(data);

        res.json({
            status: "success",
            data: {
                id_payrequest: payRequestJo.id_payrequest,
                jo_number: payRequestJo.jo_number,
                no_blanko: payRequestJo.no_blanko,
                ppn_idr: payRequestJo.ppn_idr,
                ppn_usd: payRequestJo.ppn_usd,
                vendor_name: payRequestJo.vendor_name,
                created_at: payRequestJo.createdAt,
                updated_at: payRequestJo.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }


}


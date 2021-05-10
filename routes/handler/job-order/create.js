const Validator = require('fastest-validator');
const v = new Validator();
const { JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {
    // validasi formnya
    const schema = {
        type: 'string|empty:false',
        customer_name: 'string|empty:false',
        subject: 'string|empty:false',
        terms_payment: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }
    const y = new Date();
    jo = `SCL${y.getFullYear()}${y.getMinutes()}${y.getSeconds()}`;


    const data = {
        jo_number: jo,
        type: req.body.type,
        customer_name: req.body.customer_name,
        quo_number: req.body.quo_number,
        marketing: req.body.marketing,
        subject: req.body.subject,
        terms_payment: req.body.terms_payment
    };

    try {
        const jobOrder = await JobOrder.create(data);

        return res.json({
            status: "success",
            data: {
                id: jobOrder.id,
                jo_number: jobOrder.jo_number,
                type: jobOrder.type,
                customer_name: jobOrder.customer_name,
                marketing: jobOrder.marketing,
                quo_number: jobOrder.quo_number,
                subject: jobOrder.subject,
                terms_payment: jobOrder.terms_payment,
                created_at: jobOrder.createdAt,
                updated_at: jobOrder.updatedAt

            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

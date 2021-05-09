const Validator = require('fastest-validator');
const v = new Validator();
const { JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        type: 'string|empty:false',
        customer_name: 'string|empty:false',
        terms_payment: 'string|empty:false',
        subject: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        type: req.body.type,
        customer_name: req.body.customer_name,
        subject: req.body.subject,
        terms_payment: req.body.terms_payment
    };


    const id = req.params.id;
    const jobOrder = await JobOrder.findByPk(id);
    if (!jobOrder) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await JobOrder.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                jo_number: jobOrder.jo_number,
                type: data.type,
                customer_name: data.customer_name,
                subject: data.subject,
                terms_payment: data.terms_payment,
                created_at: jobOrder.createdAt,
                updated_at: data.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
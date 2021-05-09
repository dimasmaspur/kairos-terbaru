const Validator = require('fastest-validator');
const v = new Validator();
const { DataBranch } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        branch_office_name: 'string|empty:false',
        branch_head: 'string|empty:false',
        address: 'string|empty:false',
        phone: 'string|empty:false',
        email: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        branch_office_name: req.body.branch_office_name,
        branch_head: req.body.branch_head,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        status: req.body.status
    };


    const id = req.params.id;
    const dataBranch = await DataBranch.findByPk(id);
    if (!dataBranch) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await DataBranch.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                created_by: dataBranch.created_by,
                branch_office_name: data.branch_office_name,
                branch_head: data.branch_head,
                address: data.address,
                phone: data.phone,
                email: data.email,
                status: data.status,
                created_at: data.createdAt,
                updated_at: data.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
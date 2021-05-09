const Validator = require('fastest-validator');
const v = new Validator();
const { DataBranch } = require('../../../models');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

    const cekjwt = jwt.verify(token, 'KairosSCLEDO', function (err, decoded) {
        if (err) {
            return res.status(403).json({ message: err.message });
        }
        user = decoded;
        return user;
    })
    // validasi formnya
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
        created_by: cekjwt.name,
        branch_office_name: req.body.branch_office_name,
        branch_head: req.body.branch_head,
        address: req.body.address,
        phone: req.body.phone,
        email: req.body.email,
        status: req.body.status
    };

    try {
        const dataBranch = await DataBranch.create(data);

        return res.json({
            status: "success",
            data: {
                id: dataBranch.id,
                created_by: dataBranch.created_by,
                branch_office_name: dataBranch.branch_office_name,
                branch_head: dataBranch.branch_head,
                address: dataBranch.address,
                phone: dataBranch.phone,
                email: dataBranch.email,
                status: dataBranch.status,
                created_at: dataBranch.createdAt,
                updated_at: dataBranch.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

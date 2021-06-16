const Validator = require('fastest-validator');
const v = new Validator();
const { DataCost } = require('../../../models');
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
    // const schema = {
    //     cost_name: 'string|empty:false',
    // }
    // const validate = v.validate(req.body, schema);
    // if (validate.length) {
    //     return res.status(400).json({
    //         status: 'error',
    //         message: validate
    //     });
    // }


    const data = {
        created_by: cekjwt.name,
        creator: req.body.creator,
        cost_name: req.body.cost_name,
        type: req.body.type,
        status: req.body.status
    };

    try {
        const dataCost = await DataCost.create(data);

        return res.json({
            status: "success",
            data: {
                id: dataCost.id,
                created_by: dataCost.created_by,
                cost_name: dataCost.cost_name,
                creator: dataCost.creator,
                type: dataCost.type,
                status: dataCost.status,
                created_at: dataCost.createdAt,
                updated_at: dataCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

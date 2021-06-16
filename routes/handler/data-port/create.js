const Validator = require('fastest-validator');
const v = new Validator();
const { DataPort } = require('../../../models');
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
    //     port_name: 'string|empty:false',
    //     country: 'string|empty:false',
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
        port_name: req.body.port_name,
        country: req.body.country,
        status: req.body.status
    };

    try {
        const dataPort = await DataPort.create(data);

        return res.json({
            status: "success",
            data: {
                id: dataPort.id,
                created_by: dataPort.created_by,
                port_name: dataPort.port_name,
                country: dataPort.country,
                status: dataPort.status,
                created_at: dataPort.createdAt,
                updated_at: dataPort.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

const Validator = require('fastest-validator');
const v = new Validator();
const { DataPort } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        port_name: 'string|empty:false',
        country: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        port_name: req.body.port_name,
        country: req.body.country,
        status: req.body.status
    };


    const id = req.params.id;
    const dataPort = await DataPort.findByPk(id);
    if (!dataPort) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await DataPort.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                created_by: dataPort.created_by,
                port_name: data.port_name,
                country: data.country,
                status: data.status,
                created_at: data.createdAt,
                updated_at: data.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
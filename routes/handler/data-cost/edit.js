const Validator = require('fastest-validator');
const v = new Validator();
const { DataCost } = require('../../../models');

module.exports = async (req, res, next) => {
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
        cost_name: req.body.cost_name,
        creator: req.body.creator,
        type: req.body.type,
        status: req.body.status
    };


    const id = req.params.id;
    const dataCost = await DataCost.findByPk(id);
    if (!dataCost) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await DataCost.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                created_by: dataCost.created_by,
                cost_name: data.cost_name,
                creator: data.creator,
                type: data.type,
                status: data.status,
                created_at: data.createdAt,
                updated_at: data.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
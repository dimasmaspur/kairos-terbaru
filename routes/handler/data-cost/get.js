const { DataCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const dataCost = await DataCost.findByPk(id);

    if (!dataCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: dataCost
    });
}
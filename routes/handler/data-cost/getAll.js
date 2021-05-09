const { DataCost } = require('../../../models');
module.exports = async (req, res) => {
    const dataCost = await DataCost.findAll();
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
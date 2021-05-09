const { JoData } = require('../../../models');
module.exports = async (req, res) => {

    const joData = await JoData.findAll();
    if (!joData) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: joData
    });
}
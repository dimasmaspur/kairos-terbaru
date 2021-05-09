const { DataPartner } = require('../../../models');
module.exports = async (req, res) => {
    const dataPartner = await DataPartner.findAll();
    if (!dataPartner) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: dataPartner
    });
}
const { DataPartner } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const dataPartner = await DataPartner.findByPk(id);

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
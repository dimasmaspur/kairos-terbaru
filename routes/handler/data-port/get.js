const { DataPort } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const dataPort = await DataPort.findByPk(id);

    if (!dataPort) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: dataPort
    });
}
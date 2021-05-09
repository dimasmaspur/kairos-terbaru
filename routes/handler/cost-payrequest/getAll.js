const { CostPayRequest } = require('../../../models');
module.exports = async (req, res) => {

    const costPayRequest = await CostPayRequest.findAll();
    if (!costPayRequest) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: costPayRequest
    });
}
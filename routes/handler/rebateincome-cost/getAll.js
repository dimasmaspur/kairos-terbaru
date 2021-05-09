const { RebateIncomeCost } = require('../../../models');
module.exports = async (req, res) => {

    const rebateIncomeCost = await RebateIncomeCost.findAll();
    if (!rebateIncomeCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: rebateIncomeCost
    });
}
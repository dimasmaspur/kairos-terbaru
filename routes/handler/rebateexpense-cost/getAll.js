const { RebateExpenseCost } = require('../../../models');
module.exports = async (req, res) => {

    const rebateExpenseCost = await RebateExpenseCost.findAll();
    if (!rebateExpenseCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: rebateExpenseCost
    });
}
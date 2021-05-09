const { RebateExpenseCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const rebateExpenseCost = await RebateExpenseCost.findByPk(id);

    if (!rebateExpenseCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            rebateExpenseCost
        }

    });
}
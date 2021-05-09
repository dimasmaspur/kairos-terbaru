const { RebateIncomeCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const rebateIncomeCost = await RebateIncomeCost.findByPk(id);

    if (!rebateIncomeCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            rebateIncomeCost
        }

    });
}
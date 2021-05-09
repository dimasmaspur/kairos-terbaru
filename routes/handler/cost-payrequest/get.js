const { CostPayRequest } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const costPayRequest = await CostPayRequest.findByPk(id);

    if (!costPayRequest) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            costPayRequest
        }

    });
}
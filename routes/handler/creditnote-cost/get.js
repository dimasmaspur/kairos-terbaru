const { CreditNoteCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const creditNoteCost = await CreditNoteCost.findByPk(id);

    if (!creditNoteCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            creditNoteCost
        }

    });
}
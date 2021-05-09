const { CreditNoteCost } = require('../../../models');
module.exports = async (req, res) => {

    const creditNoteCost = await CreditNoteCost.findAll();
    if (!creditNoteCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: creditNoteCost
    });
}
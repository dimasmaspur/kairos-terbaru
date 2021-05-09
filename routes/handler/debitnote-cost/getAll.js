const { DebitNoteCost } = require('../../../models');
module.exports = async (req, res) => {

    const debitNoteCost = await DebitNoteCost.findAll();
    if (!debitNoteCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: debitNoteCost
    });
}
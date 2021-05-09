const { DebitNoteCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const debitNoteCost = await DebitNoteCost.findByPk(id);

    if (!debitNoteCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            debitNoteCost
        }

    });
}
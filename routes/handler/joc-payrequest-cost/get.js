const { JocPayRequestCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const jocPayRequestCost = await JocPayRequestCost.findByPk(id);

    if (!jocPayRequestCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            jocPayRequestCost
        }

    });
}
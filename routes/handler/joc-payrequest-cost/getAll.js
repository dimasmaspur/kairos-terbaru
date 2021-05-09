const { JocPayRequestCost } = require('../../../models');
module.exports = async (req, res) => {

    const jocPayRequestCost = await JocPayRequestCost.findAll();
    if (!jocPayRequestCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: jocPayRequestCost
    });
}
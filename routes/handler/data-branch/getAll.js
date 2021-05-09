const { DataBranch } = require('../../../models');
module.exports = async (req, res) => {
    const dataBranch = await DataBranch.findAll();
    if (!dataBranch) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: dataBranch
    });
}
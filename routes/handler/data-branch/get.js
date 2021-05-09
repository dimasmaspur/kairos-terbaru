const { DataBranch } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const dataBranch = await DataBranch.findByPk(id);

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
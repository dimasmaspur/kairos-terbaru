const { DataBranch } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const dataBranch = await DataBranch.findByPk(id);

    if (!dataBranch) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await dataBranch.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
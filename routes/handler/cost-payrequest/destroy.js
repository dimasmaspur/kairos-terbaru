const { CostPayRequest } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const costPayRequest = await CostPayRequest.findByPk(id);

    if (!costPayRequest) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await costPayRequest.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
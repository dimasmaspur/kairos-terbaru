const { RebateIncomeCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const rebateIncomeCost = await RebateIncomeCost.findByPk(id);

    if (!rebateIncomeCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await rebateIncomeCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
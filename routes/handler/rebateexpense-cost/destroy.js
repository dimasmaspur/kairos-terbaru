const { RebateExpenseCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const rebateExpenseCost = await RebateExpenseCost.findByPk(id);

    if (!rebateExpenseCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await rebateExpenseCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
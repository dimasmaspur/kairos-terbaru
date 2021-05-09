const { JocRebateExpense } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jocRebateExpense = await JocRebateExpense.findByPk(id);

    if (!jocRebateExpense) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jocRebateExpense.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
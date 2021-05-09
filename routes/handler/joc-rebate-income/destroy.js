const { JocRebateIncome } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jocRebateIncome = await JocRebateIncome.findByPk(id);

    if (!jocRebateIncome) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jocRebateIncome.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
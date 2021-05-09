const { DebitNoteCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const debitNoteCost = await DebitNoteCost.findByPk(id);

    if (!debitNoteCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await debitNoteCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
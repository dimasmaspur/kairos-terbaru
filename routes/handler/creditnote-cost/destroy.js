const { CreditNoteCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const creditNoteCost = await CreditNoteCost.findByPk(id);

    if (!creditNoteCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await creditNoteCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
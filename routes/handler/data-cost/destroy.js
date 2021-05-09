const { DataCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const dataCost = await DataCost.findByPk(id);

    if (!dataCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await dataCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
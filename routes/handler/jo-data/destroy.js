const { JoData } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const joData = await JoData.findByPk(id);

    if (!joData) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await joData.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
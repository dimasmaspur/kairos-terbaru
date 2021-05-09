const { DataPort } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const dataPort = await DataPort.findByPk(id);

    if (!dataPort) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await dataPort.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
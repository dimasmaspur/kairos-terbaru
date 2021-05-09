const { DataPartner } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const dataPartner = await DataPartner.findByPk(id);

    if (!dataPartner) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await dataPartner.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
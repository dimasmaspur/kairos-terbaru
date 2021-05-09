const { Quotation } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const quotation = await Quotation.findByPk(id);

    if (!quotation) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await quotation.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}

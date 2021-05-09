const { InvoiceCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const invoiceCost = await InvoiceCost.findByPk(id);

    if (!invoiceCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await invoiceCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
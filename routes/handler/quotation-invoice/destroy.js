const { QuotationInvoice } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const quotationInvoice = await QuotationInvoice.findByPk(id);

    if (!quotationInvoice) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await quotationInvoice.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
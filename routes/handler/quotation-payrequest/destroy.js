const { QuotationPayrequest } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const quotationPayrequest = await QuotationPayrequest.findByPk(id);

    if (!quotationPayrequest) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await quotationPayrequest.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
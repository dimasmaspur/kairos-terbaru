const { Invoice } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);

    if (!invoice) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await invoice.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
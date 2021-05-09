const { PayRequestJo } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const payRequestJo = await PayRequestJo.findByPk(id);

    if (!payRequestJo) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await payRequestJo.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
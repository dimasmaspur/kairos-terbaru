const { JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jobOrder = await JobOrder.findByPk(id);

    if (!jobOrder) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jobOrder.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
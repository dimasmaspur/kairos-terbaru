const { JocPayRequestCost } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jocPayRequestCost = await JocPayRequestCost.findByPk(id);

    if (!jocPayRequestCost) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jocPayRequestCost.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
const { JocPayRequest } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jocPayRequest = await JocPayRequest.findByPk(id);

    if (!jocPayRequest) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jocPayRequest.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
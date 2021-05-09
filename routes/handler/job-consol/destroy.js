const { JobConsol } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jobConsol = await JobConsol.findByPk(id);

    if (!jobConsol) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jobConsol.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
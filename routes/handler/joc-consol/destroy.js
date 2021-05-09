const { JocConsol } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const jocConsol = await JocConsol.findByPk(id);

    if (!jocConsol) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await jocConsol.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
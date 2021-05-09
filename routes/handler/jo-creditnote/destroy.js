const { JoCreditNote } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const joCreditNote = await JoCreditNote.findByPk(id);

    if (!joCreditNote) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await joCreditNote.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
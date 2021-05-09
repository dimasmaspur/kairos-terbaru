const { JoDebitNote } = require('../../../models');

module.exports = async (req, res, next) => {
    const id = req.params.id;
    const joDebitNote = await JoDebitNote.findByPk(id);

    if (!joDebitNote) {
        return res
            .status(404)
            .json({ status: "error", message: "Data not found" });
    }

    await joDebitNote.destroy();
    return res.json({
        status: "success",
        message: "Data deleted",
    });
}
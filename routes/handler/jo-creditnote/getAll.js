const { JoCreditNote } = require('../../../models');
module.exports = async (req, res) => {

    const joNumber = req.query.jo_number


    const joCreditNote = await JoCreditNote.findAll({
        where: {
            jo_number: joNumber
        }
    });
    if (!joCreditNote) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }


    return res.json({
        status: 'success',
        data: joCreditNote
    });

}

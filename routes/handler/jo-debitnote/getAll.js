const { JoDebitNote } = require('../../../models');
module.exports = async (req, res) => {

    const joNumber = req.query.jo_number


    const joDebitNote = await JoDebitNote.findAll({
        where: {
            jo_number: joNumber
        }
    });
    if (!joDebitNote) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }


    return res.json({
        status: 'success',
        data: joDebitNote
    });

}

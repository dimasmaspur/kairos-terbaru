const { Quotation } = require('../../../models');
module.exports = async (req, res) => {
    const quotation = await Quotation.findAll();
    if (!quotation) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: quotation
    });

    // const quotation = await quotation.findAll({
    //     include: [{
    //         model: JoDebitNote
    //     }]
    // }).then(allJO => res.send(allJO));
}
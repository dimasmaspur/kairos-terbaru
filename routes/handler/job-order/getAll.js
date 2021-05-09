const { JobOrder, JoDebitNote } = require('../../../models');
module.exports = async (req, res) => {
    const jobOrder = await JobOrder.findAll();
    if (!jobOrder) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: jobOrder
    });

    // const jobOrder = await JobOrder.findAll({
    //     include: [{
    //         model: JoDebitNote
    //     }]
    // }).then(allJO => res.send(allJO));
}
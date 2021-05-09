const { InvoiceCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const invoiceCost = await InvoiceCost.findByPk(id);

    if (!invoiceCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            invoiceCost
        }

    });
}
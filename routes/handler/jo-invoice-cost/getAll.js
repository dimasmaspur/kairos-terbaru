const { InvoiceCost } = require('../../../models');
module.exports = async (req, res) => {

    const invoiceCost = await InvoiceCost.findAll();
    if (!invoiceCost) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    return res.json({
        status: 'success',
        data: invoiceCost
    });
}
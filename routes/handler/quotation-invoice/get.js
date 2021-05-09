const { QuotationInvoice } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const quotationInvoice = await QuotationInvoice.findByPk(id);

    if (!quotationInvoice) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ jocPayRequest });
    return res.json({
        status: 'success',
        data: {
            id: quotationInvoice.id,
            quo_number: quotationInvoice.quo_number,
            item_cost: quotationInvoice.item_cost,
            unit: quotationInvoice.unit,
            quantity: quotationInvoice.quantity,
            price: quotationInvoice.price,
            currency: quotationInvoice.currency,
            note: quotationInvoice.note,
            amount_IDR: quotationInvoice.amount_IDR,
            amount_USD: quotationInvoice.amount_USD,
            created_at: quotationInvoice.createdAt,
            updated_at: quotationInvoice.updatedAt
        }

    });
}
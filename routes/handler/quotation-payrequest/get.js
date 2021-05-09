const { QuotationPayrequest } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const quotationPayrequest = await QuotationPayrequest.findByPk(id);

    if (!quotationPayrequest) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }

    // res.send({ jocPayRequest });
    return res.json({
        status: 'success',
        data: {
            id: quotationPayrequest.id,
            quo_number: quotationPayrequest.quo_number,
            item_cost: quotationPayrequest.item_cost,
            unit: quotationPayrequest.unit,
            quantity: quotationPayrequest.quantity,
            price: quotationPayrequest.price,
            currency: quotationPayrequest.currency,
            vendor: quotationPayrequest.vendor,
            amount_IDR: quotationPayrequest.amount_IDR,
            amount_USD: quotationPayrequest.amount_USD,
            created_at: quotationPayrequest.createdAt,
            updated_at: quotationPayrequest.updatedAt
        }

    });
}
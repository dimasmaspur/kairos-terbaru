const Validator = require('fastest-validator');
const v = new Validator();
const { JoCreditNote, CreditNoteCost } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        item_cost: 'string|empty:false',
        unit: 'string|empty:false',
        currency: 'string|empty:false'
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const idCreditNote = await JoCreditNote.findOne({ where: { id_credit_note: req.body.id_credit_note } });
    if (!idCreditNote) {
        return res.status(404).json({ status: 'error', message: 'id credit note not found' });
    }

    const data = {
        id_credit_note: idCreditNote.id_credit_note,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const creditNoteCost = await CreditNoteCost.create(data);

        return res.json({
            status: "success",
            data: {
                id_debit_cost: creditNoteCost.id_debit_cost,
                id_credit_note: idCreditNote.id_credit_note,
                item_cost: creditNoteCost.item_cost,
                unit: creditNoteCost.unit,
                quantity: creditNoteCost.quantity,
                price: creditNoteCost.price,
                currency: creditNoteCost.currency,
                flag_ppn: creditNoteCost.flag_ppn,
                note: creditNoteCost.note,
                created_at: creditNoteCost.createdAt,
                updated_at: creditNoteCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

const Validator = require('fastest-validator');
const v = new Validator();
const { JoDebitNote, DebitNoteCost } = require('../../../models');

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

    const idDebitNote = await JoDebitNote.findOne({ where: { id_debit_note: req.body.id_debit_note } });
    if (!idDebitNote) {
        return res.status(404).json({ status: 'error', message: 'id debit note not found' });
    }

    const data = {
        id_debit_note: idDebitNote.id_debit_note,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const debitNoteCost = await DebitNoteCost.create(data);

        return res.json({
            status: "success",
            data: {
                id_debit_cost: debitNoteCost.id_debit_cost,
                id_debit_note: idDebitNote.id_debit_note,
                item_cost: debitNoteCost.item_cost,
                unit: debitNoteCost.unit,
                quantity: debitNoteCost.quantity,
                price: debitNoteCost.price,
                currency: debitNoteCost.currency,
                flag_ppn: debitNoteCost.flag_ppn,
                note: debitNoteCost.note,
                created_at: debitNoteCost.createdAt,
                updated_at: debitNoteCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

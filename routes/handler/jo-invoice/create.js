const Validator = require('fastest-validator');
const v = new Validator();
const { Invoice, JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {

    // validasi formnya
    const schema = {
        jo_number: 'string|empty:false',
        kode: 'string|empty:false',
        invoice_to: 'string|empty:false',

        item_cost: 'string|empty:false',
        no_blanko: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const jo = await JobOrder.findOne({ where: { jo_number: req.body.jo_number } });
    if (!jo) {
        return res.status(404).json({ status: 'error', message: 'JO Number not found' });
    }
    // const checkJoNumber = await JoDebitNote.findOne({ where: { jo_number: req.body.jo_number } });
    // if (checkJoNumber) {
    //     return res.status(400).json({ status: 'error', message: 'JO Number already exists!' });
    // }
    // const noBlanko = await JoDebitNote.findOne({ where: { no_blanko: req.body.no_blanko } });
    // if (noBlanko) {
    //     return res.status(400).json({ status: 'error', message: 'no blanko already exists!' });
    // }

    const data = {
        jo_number: jo.jo_number,
        kode: req.body.kode,
        invoice_to: req.body.invoice_to,
        no_blanko: req.body.no_blanko,
        item_cost: req.body.item_cost,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        biaya_materai: req.body.biaya_materai,
        note: req.body.note
    };

    try {
        const invoice = await Invoice.create(data);

        return res.json({
            status: "success",
            data: {
                id: invoice.id_invoice,
                jo_number: invoice.jo_number,
                kode: invoice.kode,
                invoice_to: invoice.invoice_to,
                item_cost: invoice.item_cost,
                no_blanko: invoice.no_blanko,
                ppn_idr: invoice.ppn_idr,
                ppn_usd: invoice.ppn_usd,
                biaya_materai: invoice.biaya_materai,
                note: invoice.note,
                created_at: invoice.createdAt,
                updated_at: invoice.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

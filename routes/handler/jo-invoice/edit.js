const Validator = require('fastest-validator');
const v = new Validator();
const { Invoice } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        kode: 'string|empty:false',
        invoice_to: 'string|empty:false',
        no_blanko: 'string|empty:false',
        item_cost: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        kode: req.body.kode,
        invoice_to: req.body.invoice_to,
        no_blanko: req.body.no_blanko,
        item_cost: req.body.item_cost,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        biaya_materai: req.body.biaya_materai,
        note: req.body.note
    };


    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) {
        return res.status(404).json({ status: 'error', message: 'id not found' });
    }
    const selector = {
        where: { id_invoice: id }
    };

    try {
        await Invoice.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                jo_number: invoice.jo_number,
                kode: data.kode,
                invoice_to: data.invoice_to,
                no_blanko: data.no_blanko,
                item_cost: data.item_cost,
                ppn_idr: data.ppn_idr,
                ppn_usd: data.ppn_usd,
                biaya_materai: data.biaya_materai,
                note: data.note,
                created_at: invoice.createdAt,
                updated_at: invoice.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}

const Validator = require('fastest-validator');
const v = new Validator();
const { Invoice } = require('../../../models');

module.exports = async (req, res, next) => {
    const schema = {
        invoice_to: 'string|empty:false',
        no_blanko: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const data = {
        invoice_to: req.body.invoice_to,
        no_blanko: req.body.no_blanko,
        ppn_idr: req.body.ppn_idr,
        ppn_usd: req.body.ppn_usd,
        biaya_materai: req.body.biaya_materai,
    };


    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);
    if (!invoice) {
        return res.status(404).json({ status: 'error', message: 'id invoice not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await Invoice.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                jo_number: invoice.jo_number,
                invoice_to: data.invoice_to,
                no_blanko: data.no_blanko,
                ppn_idr: data.ppn_idr,
                ppn_usd: data.ppn_usd,
                biaya_materai: data.biaya_materai,
                created_at: invoice.createdAt,
                updated_at: invoice.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
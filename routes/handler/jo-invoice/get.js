const { Invoice, InvoiceCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const invoice = await Invoice.findByPk(id);

    if (!invoice) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const invoiceCost = await InvoiceCost.findAll({
        where: {
            id_invoice: id
        }
    });

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            id: invoice.id_invoice,
            jo_number: invoice.jo_number,
            kode: invoice.kode,
            invoice_to: invoice.invoice_to,
            no_blanko: invoice.no_blanko,
            ppn_idr: invoice.ppn_idr,
            ppn_usd: invoice.ppn_usd,
            biaya_materai: invoice.biaya_materai,
            note: invoice.note,
            item_cost: invoice.item_cost,
            created_at: invoice.createdAt,
            updated_at: invoice.updatedAt,
            invoiceCost
        }

    });
}

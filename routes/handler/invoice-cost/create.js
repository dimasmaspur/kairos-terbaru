const Validator = require('fastest-validator');
const v = new Validator();
const { Invoice, InvoiceCost, JobOrder } = require('../../../models');

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

    const dataJobOrder = await JobOrder.findOne({ where: { jo_number: req.body.jo_number } });
    if (!dataJobOrder) {
        return res.status(404).json({ status: 'error', message: 'jo number not found' });
    }
    const invoiceTo = dataJobOrder.customer_name;

    const idInvoice = await Invoice.findOne({ where: { kode: req.body.kode, jo_number: req.body.jo_number } });
    if (!idInvoice) {
        // return res.status(404).json({ status: 'error', message: 'id invoice not found' });
        dataInvoicePertama = {
            jo_number: req.body.jo_number,
            invoice_to: invoiceTo,
            kode: req.body.kode
        }

        const createInvoice = await Invoice.create(dataInvoicePertama);
        if (!createInvoice) {
            return res.status(400).json({ status: 'error', message: 'error create invoice' });
        }
    }


    const joInvoice = await Invoice.findOne({ where: { kode: req.body.kode, jo_number: req.body.jo_number } });
    if (!joInvoice) {
        dataInvoiceBaru = {
            jo_number: req.body.jo_number,
            invoice_to: invoiceTo,
            kode: req.body.kode
        }

        const createInvoice = await Invoice.create(dataInvoiceBaru);
        if (!createInvoice) {
            return res.status(400).json({ status: 'error', message: 'error create invoice' });
        }


        const data = {
            id_invoice: createInvoice.id,
            kode: req.body.kode,
            item_cost: req.body.item_cost,
            unit: req.body.unit,
            quantity: req.body.quantity,
            price: req.body.price,
            currency: req.body.currency,
            flag_ppn: req.body.flag_ppn,
            note: req.body.note,
        };

        try {
            const invoiceCost = await InvoiceCost.create(data);
            return res.json({
                status: "success",
                data: {
                    id: invoiceCost.id,
                    id_invoice: idInvoice.id,
                    kode: invoiceCost.kode,
                    item_cost: invoiceCost.item_cost,
                    unit: invoiceCost.unit,
                    quantity: invoiceCost.quantity,
                    price: invoiceCost.price,
                    currency: invoiceCost.currency,
                    flag_ppn: invoiceCost.flag_ppn,
                    note: invoiceCost.note,
                    created_at: invoiceCost.createdAt,
                    updated_at: invoiceCost.updatedAt
                }
            })
        } catch (error) {
            return res.status(400).json({ status: "error", message: error.message });

        }
    }

    const data = {
        id_invoice: joInvoice.id,
        kode: req.body.kode,
        item_cost: req.body.item_cost,
        unit: req.body.unit,
        quantity: req.body.quantity,
        price: req.body.price,
        currency: req.body.currency,
        flag_ppn: req.body.flag_ppn,
        note: req.body.note,
    };

    try {
        const invoiceCost = await InvoiceCost.create(data);

        return res.json({
            status: "success",
            data: {
                id: invoiceCost.id,
                id_invoice: joInvoice.id,
                kode: invoiceCost.kode,
                item_cost: invoiceCost.item_cost,
                unit: invoiceCost.unit,
                quantity: invoiceCost.quantity,
                price: invoiceCost.price,
                currency: invoiceCost.currency,
                flag_ppn: invoiceCost.flag_ppn,
                note: invoiceCost.note,
                created_at: invoiceCost.createdAt,
                updated_at: invoiceCost.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}

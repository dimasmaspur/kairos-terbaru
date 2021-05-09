const Validator = require('fastest-validator');
const v = new Validator();
const { Invoice, InvoiceCost, JobOrder } = require('../../../models');

module.exports = async (req, res, next) => {
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


    const id = req.params.id;
    const invoiceCost = await InvoiceCost.findByPk(id);
    if (!invoiceCost) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const dataJobOrder = await JobOrder.findOne({ where: { jo_number: req.body.jo_number } });
    if (!dataJobOrder) {
        return res.status(404).json({ status: 'error', message: 'jo number not found' });
    };

    const invoiceTo = dataJobOrder.customer_name;

    const selector = {
        where: { id_invoice: id }
    };

    // const cekKode = await InvoiceCost.findOne({ where: { id_invoice: invoiceCost.id_invoice } });


    // const idInvoice = await Invoice.findOne({ where: { kode: req.body.kode, jo_number: req.body.jo_number } });
    // if (!idInvoice) {
    //     // return res.status(404).json({ status: 'error', message: 'id invoice not found' });
    //     dataInvoicePertama = {
    //         jo_number: req.body.jo_number,
    //         invoice_to: invoiceTo,
    //         kode: req.body.kode
    //     }

    //     const createInvoice = await Invoice.create(dataInvoicePertama);
    //     if (!createInvoice) {
    //         return res.status(400).json({ status: 'error', message: 'error create invoice' });
    //     }

    //     // return res.json(createInvoice)
    // }

    const cekKode = await Invoice.findOne({ where: { kode: req.body.kode, jo_number: req.body.jo_number } });
    if (!cekKode) {
        // return res.send("gaada")
        dataInvoiceBaru = {
            jo_number: req.body.jo_number,
            invoice_to: invoiceTo,
            kode: req.body.kode
        }

        const createInvoiceBaru = await Invoice.create(dataInvoiceBaru);
        if (!createInvoiceBaru) {
            return res.status(400).json({ status: 'error', message: 'error create invoice' });
        }
        // return res.send(createInvoiceBaru.id);

        const dataterbaru = {
            item_cost: req.body.item_cost,
            id_invoice: createInvoiceBaru.id,
            unit: req.body.unit,
            quantity: req.body.quantity,
            price: req.body.price,
            currency: req.body.currency,
            flag_ppn: req.body.flag_ppn,
            note: req.body.note,
            kode: req.body.kode,
        };
        try {

            await InvoiceCost.create(dataterbaru);
            await invoiceCost.destroy();
            return res.json({
                status: "success",
                data: {
                    id: id,
                    id_invoice: dataterbaru.id_invoice,
                    kode: dataterbaru.kode,
                    item_cost: dataterbaru.item_cost,
                    unit: dataterbaru.unit,
                    quantity: dataterbaru.quantity,
                    price: dataterbaru.price,
                    currency: dataterbaru.currency,
                    flag_ppn: dataterbaru.flag_ppn,
                    note: dataterbaru.note,
                    created_at: invoiceCost.createdAt,
                    updated_at: invoiceCost.updatedAt
                }
            })
        } catch (error) {
            return res.status(400).json({ status: "error", message: error.message });

        }
    }
    return res.send("ada")
    // const data = {
    //     item_cost: req.body.item_cost,
    //     id_invoice: idInvoice.id,
    //     unit: req.body.unit,
    //     quantity: req.body.quantity,
    //     price: req.body.price,
    //     currency: req.body.currency,
    //     flag_ppn: req.body.flag_ppn,
    //     note: req.body.note,
    //     kode: req.body.kode,
    // };

    // try {
    //     await InvoiceCost.update(data, selector);
    //     return res.json({
    //         status: "success",
    //         data: {
    //             id: id,
    //             id_invoice: idInvoice.id,
    //             kode: data.kode,
    //             item_cost: data.item_cost,
    //             unit: data.unit,
    //             quantity: data.quantity,
    //             price: data.price,
    //             currency: data.currency,
    //             flag_ppn: data.flag_ppn,
    //             note: data.note,
    //             created_at: invoiceCost.createdAt,
    //             updated_at: invoiceCost.updatedAt
    //         }
    //     })
    // } catch (error) {
    //     return res.status(400).json({ status: "error", message: error.message });

    // }

}
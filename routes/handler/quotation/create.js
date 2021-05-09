const Validator = require('fastest-validator');
const v = new Validator();
const { Quotation } = require('../../../models');

module.exports = async (req, res, next) => {
    // validasi formnya
    const schema = {
        type: 'string|empty:false',
        customer_name: 'string|empty:false',
        subject: 'string|empty:false',
        terms_payment: 'string|empty:false',
        destination_origin: 'string|empty:false',
        consol: 'string|empty:false',
    }
    const validate = v.validate(req.body, schema);
    if (validate.length) {
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }
    const y = new Date();
    quo = `QUO${y.getFullYear()}${y.getMinutes()}${y.getSeconds()}`;

    const data = {
        quo_number: quo,
        expires_date: req.body.expires_date,
        terms_payment: req.body.terms_payment,
        type: req.body.type,
        subject: req.body.subject,
        ETD: req.body.etd,
        ETA: req.body.eta,
        kurs: req.body.kurs,
        destination_origin: req.body.destination_origin,
        consol: req.body.consol,
        customer_name: req.body.customer_name,
        agen_rate: req.body.agen_rate,
        special_rate: req.body.special_rate,
        LSS: req.body.LSS,
        others: req.body.others,
        CFS: req.body.CFS,
        Mechanic: req.body.Mechanic,
        ADM: req.body.ADM,
        ocean_freight: req.body.ocean_freight,
        deskripsi_header: req.body.deskripsi_header,
        deskripsi_footer: req.body.deskripsi_footer,
        status: req.body.status,
        creator: req.body.creator,
        branch_office: req.body.branch_office,
    };

    try {
        const quotation = await Quotation.create(data);

        return res.json({
            status: "success",
            data: {
                id: quotation.id,
                quo_number: quo,
                expires_date: quotation.expires_date,
                terms_payment: quotation.terms_payment,
                type: quotation.type,
                subject: quotation.subject,
                ETD: quotation.etd,
                ETA: quotation.eta,
                kurs: quotation.kurs,
                destination_origin: quotation.destination_origin,
                consol: quotation.consol,
                customer_name: quotation.customer_name,
                agen_rate: quotation.agen_rate,
                special_rate: quotation.special_rate,
                LSS: quotation.LSS,
                others: quotation.others,
                CFS: quotation.CFS,
                Mechanic: quotation.Mechanic,
                ADM: quotation.ADM,
                ocean_freight: quotation.ocean_freight,
                deskripsi_header: quotation.deskripsi_header,
                deskripsi_footer: quotation.deskripsi_footer,
                status: quotation.status,
                creator: quotation.creator,
                branch_office: quotation.branch_office,
                created_at: quotation.createdAt,
                updated_at: quotation.updatedAt

            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }
}

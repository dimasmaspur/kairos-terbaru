const Validator = require('fastest-validator');
const v = new Validator();
const { Quotation } = require('../../../models');

module.exports = async (req, res, next) => {
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

    const data = {
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
        branch_office: req.body.branch_office
    };


    const id = req.params.id;
    const quotation = await Quotation.findByPk(id);
    if (!quotation) {
        return res.status(404).json({ status: 'error', message: 'Data not found' });
    }
    const selector = {
        where: { id: id }
    };

    try {
        await Quotation.update(data, selector);
        return res.json({
            status: "success",
            data: {
                id: id,
                quo_number: quotation.quo_number,
                expires_date: data.expires_date,
                terms_payment: data.terms_payment,
                type: data.type,
                subject: data.subject,
                ETD: data.etd,
                ETA: data.eta,
                kurs: data.kurs,
                destination_origin: data.destination_origin,
                consol: data.consol,
                customer_name: data.customer_name,
                agen_rate: data.agen_rate,
                special_rate: data.special_rate,
                LSS: data.LSS,
                others: data.others,
                CFS: data.CFS,
                Mechanic: data.Mechanic,
                ADM: data.ADM,
                ocean_freight: data.ocean_freight,
                deskripsi_header: data.deskripsi_header,
                deskripsi_footer: data.deskripsi_footer,
                status: data.status,
                creator: data.creator,
                branch_office: data.branch_office,
                created_at: quotation.createdAt,
                updated_at: quotation.updatedAt
            }
        })
    } catch (error) {
        return res.status(400).json({ status: "error", message: error.message });

    }

}
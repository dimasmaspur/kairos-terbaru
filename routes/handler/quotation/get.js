const { Quotation, QuotationInvoice, QuotationPayrequest } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const quotation = await Quotation.findByPk(id);

    if (!quotation) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const quotationInvoice = await QuotationInvoice.findAll({
        where: {
            quo_number: quotation.quo_number
        }
    });
    const quotationPayrequest = await QuotationPayrequest.findAll({
        where: {
            quo_number: quotation.quo_number
        }
    });

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            id: quotation.id,
            quo_number: quotation.quo_number,
            expires_date: quotation.expires_date,
            terms_payment: quotation.terms_payment,
            type: quotation.type,
            subject: quotation.subject,
            ETD: quotation.ETD,
            ETA: quotation.ETA,
            kurs: quotation.kurs,
            destination_origin: quotation.destination_origin,
            consol: quotation.consol,
            customer_name: quotation.customer_name,
            agent_rate: quotation.agent_rate,
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
            updated_at: quotation.updatedAt,
            quotationInvoice,
            quotationPayrequest
            // debit_note: [{
            //     id_debit_note: joDebitNote.id_debit_note,
            //     jo_number: joDebitNote.jo_number,
            //     no_blanko: joDebitNote.no_blanko,
            //     agent_name: joDebitNote.agent_name,
            //     ppn_idr: joDebitNote.ppn_idr,
            //     ppn_idr: joDebitNote.ppn_usd,
            //     created_at: joDebitNote.createdAt,
            //     updated_at: joDebitNote.updatedAt,
            // }]
        }

    });
}
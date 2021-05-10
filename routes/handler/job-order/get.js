const { JobOrder, JoData, JoDebitNote, DebitNoteCost, PayRequestJo, CostPayRequest, JoCreditNote, CreditNoteCost, Invoice, InvoiceCost } = require('../../../models');
module.exports = async (req, res) => {

    const id = req.params.id;
    const jobOrder = await JobOrder.findByPk(id);

    if (!jobOrder) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    const joPayRequest = await PayRequestJo.findAll({
        where: {
            jo_number: jobOrder.jo_number
        },
        include: [CostPayRequest]
    });
    const joData = await JoData.findAll({
        where: {
            jo_number: jobOrder.jo_number
        }
    });
    const joDebitNote = await JoDebitNote.findAll({
        where: {
            jo_number: jobOrder.jo_number
        },
        include: [DebitNoteCost]
    });
    const joCreditNote = await JoCreditNote.findAll({
        where: {
            jo_number: jobOrder.jo_number
        },
        include: [CreditNoteCost]
    });
    const invoice = await Invoice.findAll({
        where: {
            jo_number: jobOrder.jo_number
        },
        include: [InvoiceCost]
    });

    // res.send({ joDebitNote });
    return res.json({
        status: 'success',
        data: {
            id: jobOrder.id,
            jo_number: jobOrder.jo_number,
            type: jobOrder.type,
            customer_name: jobOrder.customer_name,
            quo_number: jobOrder.quo_number,
            marketing: jobOrder.marketing,
            terms_payment: jobOrder.terms_payment,
            subject: jobOrder.subject,
            created_at: jobOrder.createdAt,
            updated_at: jobOrder.updatedAt,
            joData,
            joPayRequest,
            joDebitNote,
            joCreditNote,
	    invoice
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

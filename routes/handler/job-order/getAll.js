const { JobOrder, Invoice,JoData ,PayRequestJo, CostPayRequest, JoDebitNote, DebitNoteCost, JoCreditNote, CreditNoteCost, InvoiceCost } = require('../../../models');
module.exports = async (req, res) => {
    
    const jobOrder = await JobOrder.findAll();
    if (!jobOrder) {
        return res.status(404).json({
            status: 'error',
            message: 'data not found'
        });
    }
    
    var dataArray = [];
    var jobOrderArray = [];
    var datanya = [];
    for (let i = 0; i < jobOrder.length; i++) {

        const joPayRequest = await PayRequestJo.findAll({
            where: {
                jo_number: jobOrder[i].jo_number
            },
            include: [CostPayRequest]
        });
        
        const joData = await JoData.findAll({
            where: {
                jo_number: jobOrder[i].jo_number
            }
        });
        const joDebitNote = await JoDebitNote.findAll({
            where: {
                jo_number: jobOrder[i].jo_number
            },
            include: [DebitNoteCost]
        });
        const joCreditNote = await JoCreditNote.findAll({
            where: {
                jo_number: jobOrder[i].jo_number
            },
            include: [CreditNoteCost]
        });
        const invoice = await Invoice.findAll({
            where: {
                jo_number: jobOrder[i].jo_number
            },
            include: [InvoiceCost]
        });

        datanya = {
                id: jobOrder[i].id,
                jo_number: jobOrder[i].jo_number,
                type: jobOrder[i].type,
                customer_name: jobOrder[i].customer_name,
                quo_number: jobOrder[i].quo_number,
                marketing: jobOrder[i].marketing,
                subject: jobOrder[i].subject,
                terms_payment: jobOrder[i].terms_payment,
                createdAt: jobOrder[i].created_at,
                updatedAt: jobOrder[i].updated_at,
                joData,
                joPayRequest,
                joDebitNote,
                joCreditNote,
                invoice
        }
        dataArray.push(datanya)
       
   }
    return res.json({
        status: 'success',
        data: dataArray
    });
}
const express = require('express');
const router = express.Router();
const quotationInvoiceHandler = require('./handler/quotation-invoice');

/* GET users listing. */
router.post('/', quotationInvoiceHandler.create);
router.put('/:id', quotationInvoiceHandler.edit);
// router.get('/', quotationInvoiceHandler.getAll);
router.get('/:id', quotationInvoiceHandler.get);
router.delete('/:id', quotationInvoiceHandler.destroy);

module.exports = router;

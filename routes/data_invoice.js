const express = require('express');
const router = express.Router();
const joInvoiceHandler = require('./handler/jo-invoice');

/* GET users listing. */
router.post('/', joInvoiceHandler.create);
router.put('/:id', joInvoiceHandler.edit);
router.get('/:id', joInvoiceHandler.get);
// router.get('/print/:id', joInvoiceHandler.print);
router.delete('/:id', joInvoiceHandler.destroy);

module.exports = router;

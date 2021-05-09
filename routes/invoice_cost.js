const express = require('express');
const router = express.Router();
const invoiceCostHandler = require('./handler/jo-invoice-cost');

/* GET users listing. */
router.post('/', invoiceCostHandler.create);
router.put('/:id', invoiceCostHandler.edit);
router.get('/', invoiceCostHandler.getAll);
// router.get('/print/:id', invoiceCostHandler.print);
router.get('/:id', invoiceCostHandler.get);
router.delete('/:id', invoiceCostHandler.destroy);

module.exports = router;

const express = require('express');
const router = express.Router();
const quotationHandler = require('./handler/quotation');

/* GET users listing. */
router.post('/', quotationHandler.create);
router.put('/:id', quotationHandler.edit);
router.get('/', quotationHandler.getAll);
router.get('/:id', quotationHandler.get);
router.delete('/:id', quotationHandler.destroy);

module.exports = router;

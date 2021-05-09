const express = require('express');
const router = express.Router();
const quotationPayrequstHandler = require('./handler/quotation-payrequest');

/* GET users listing. */
router.post('/', quotationPayrequstHandler.create);
router.put('/:id', quotationPayrequstHandler.edit);
// router.get('/', quotationPayrequstHandler.getAll);
router.get('/:id', quotationPayrequstHandler.get);
router.delete('/:id', quotationPayrequstHandler.destroy);

module.exports = router;

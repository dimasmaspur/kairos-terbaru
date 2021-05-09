const express = require('express');
const router = express.Router();
const debitNoteCostHandler = require('./handler/debitnote-cost');

/* GET users listing. */
router.post('/', debitNoteCostHandler.create);
router.put('/:id', debitNoteCostHandler.edit);
router.get('/:id', debitNoteCostHandler.get);
router.get('/', debitNoteCostHandler.getAll);
router.delete('/:id', debitNoteCostHandler.destroy);

module.exports = router;

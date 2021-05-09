const express = require('express');
const router = express.Router();
const rebateExpenseCostHandler = require('./handler/rebateexpense-cost');

/* GET users listing. */
router.post('/', rebateExpenseCostHandler.create);
router.put('/:id', rebateExpenseCostHandler.edit);
router.get('/:id', rebateExpenseCostHandler.get);
router.get('/', rebateExpenseCostHandler.getAll);
router.delete('/:id', rebateExpenseCostHandler.destroy);

module.exports = router;

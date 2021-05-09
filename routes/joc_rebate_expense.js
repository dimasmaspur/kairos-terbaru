const express = require('express');
const router = express.Router();
const rebateExpenseHandler = require('./handler/joc-rebate-expense');

/* GET users listing. */
router.post('/', rebateExpenseHandler.create);
router.put('/:id', rebateExpenseHandler.edit);
// router.get('/', rebateExpenseHandler.getAll);
router.get('/:id', rebateExpenseHandler.get);
router.get('/print/:id', rebateExpenseHandler.print);
router.delete('/:id', rebateExpenseHandler.destroy);

module.exports = router;

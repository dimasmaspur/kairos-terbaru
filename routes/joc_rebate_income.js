const express = require('express');
const router = express.Router();
const rebateIncomeHandler = require('./handler/joc-rebate-income');

/* GET users listing. */
router.post('/', rebateIncomeHandler.create);
router.put('/:id', rebateIncomeHandler.edit);
// router.get('/', rebateIncomeHandler.getAll);
router.get('/:id', rebateIncomeHandler.get);
router.get('/print/:id', rebateIncomeHandler.print);
router.delete('/:id', rebateIncomeHandler.destroy);

module.exports = router;

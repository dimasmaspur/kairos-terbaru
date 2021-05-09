const express = require('express');
const router = express.Router();
const rebateIncomeCostHandler = require('./handler/rebateincome-cost');

/* GET users listing. */
router.post('/', rebateIncomeCostHandler.create);
router.put('/:id', rebateIncomeCostHandler.edit);
router.get('/:id', rebateIncomeCostHandler.get);
router.get('/', rebateIncomeCostHandler.getAll);
router.delete('/:id', rebateIncomeCostHandler.destroy);

module.exports = router;

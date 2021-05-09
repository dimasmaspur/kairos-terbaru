const express = require('express');
const router = express.Router();
const jobOrderHandler = require('./handler/job-order');

/* GET users listing. */
router.post('/', jobOrderHandler.create);
router.put('/:id', jobOrderHandler.edit);
router.get('/', jobOrderHandler.getAll);
router.get('/:id', jobOrderHandler.get);
router.delete('/:id', jobOrderHandler.destroy);

module.exports = router;

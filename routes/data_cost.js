const express = require('express');
const router = express.Router();
const dataCostHandler = require('./handler/data-cost')

/* GET users listing. */
router.post('/', dataCostHandler.create);
router.put('/:id', dataCostHandler.edit);
router.get('/', dataCostHandler.getAll);
router.get('/:id', dataCostHandler.get);
router.delete('/:id', dataCostHandler.destroy);

module.exports = router;

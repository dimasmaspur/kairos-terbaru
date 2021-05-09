const express = require('express');
const router = express.Router();
const creditNoteCostHandler = require('./handler/creditnote-cost');

/* GET users listing. */
router.post('/', creditNoteCostHandler.create);
router.put('/:id', creditNoteCostHandler.edit);
router.get('/:id', creditNoteCostHandler.get);
router.get('/', creditNoteCostHandler.getAll);
router.delete('/:id', creditNoteCostHandler.destroy);

module.exports = router;

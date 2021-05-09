const express = require('express');
const router = express.Router();
const dataPortHandler = require('./handler/data-port')

/* GET users listing. */
router.post('/', dataPortHandler.create);
router.put('/:id', dataPortHandler.edit);
router.get('/', dataPortHandler.getAll);
router.get('/:id', dataPortHandler.get);
router.delete('/:id', dataPortHandler.destroy);

module.exports = router;

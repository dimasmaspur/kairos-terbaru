const express = require('express');
const router = express.Router();
const joDataHandler = require('./handler/jo-data');

/* GET users listing. */
router.post('/', joDataHandler.create);
router.put('/:id', joDataHandler.edit);
router.get('/', joDataHandler.getAll);
router.get('/:id', joDataHandler.get);
router.delete('/:id', joDataHandler.destroy);

module.exports = router;

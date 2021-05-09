const express = require('express');
const router = express.Router();
const costPayRequestHandler = require('./handler/cost-payrequest');

/* GET users listing. */
router.post('/', costPayRequestHandler.create);
router.put('/:id', costPayRequestHandler.edit);
router.get('/:id', costPayRequestHandler.get);
router.get('/', costPayRequestHandler.getAll);
router.delete('/:id', costPayRequestHandler.destroy);

module.exports = router;

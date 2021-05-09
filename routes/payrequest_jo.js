const express = require('express');
const router = express.Router();
const joPayRequestHandler = require('./handler/payrequest-jo');

/* GET users listing. */
router.post('/', joPayRequestHandler.create);
router.put('/:id', joPayRequestHandler.edit);
router.get('/:id', joPayRequestHandler.get);
router.get('/print/:id', joPayRequestHandler.print);
router.get('/', joPayRequestHandler.getAll);
router.delete('/:id', joPayRequestHandler.destroy);

module.exports = router;

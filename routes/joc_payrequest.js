const express = require('express');
const router = express.Router();
const jocPayRequestHandler = require('./handler/joc-payrequest');

/* GET users listing. */
router.post('/', jocPayRequestHandler.create);
router.put('/:id', jocPayRequestHandler.edit);
router.get('/:id', jocPayRequestHandler.get);
router.get('/print/:id', jocPayRequestHandler.print);
router.delete('/:id', jocPayRequestHandler.destroy);

module.exports = router;

const express = require('express');
const router = express.Router();
const joDebitNoteHandler = require('./handler/jo-debitnote');

/* GET users listing. */
router.post('/', joDebitNoteHandler.create);
router.put('/:id', joDebitNoteHandler.edit);
router.get('/:id', joDebitNoteHandler.get);
router.get('/', joDebitNoteHandler.getAll);
router.get('/print/:id', joDebitNoteHandler.print);
router.delete('/:id', joDebitNoteHandler.destroy);

module.exports = router;

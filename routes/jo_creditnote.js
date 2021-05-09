const express = require('express');
const router = express.Router();
const joCreditNoteHandler = require('./handler/jo-creditnote');

/* GET users listing. */
router.post('/', joCreditNoteHandler.create);
router.put('/:id', joCreditNoteHandler.edit);
router.get('/:id', joCreditNoteHandler.get);
router.get('/', joCreditNoteHandler.getAll);
router.get('/print/:id', joCreditNoteHandler.print);
router.delete('/:id', joCreditNoteHandler.destroy);

module.exports = router;

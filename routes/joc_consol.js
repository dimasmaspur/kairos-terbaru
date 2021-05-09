const express = require('express');
const router = express.Router();
const jocConsolHandler = require('./handler/joc-consol');

/* GET users listing. */
router.post('/', jocConsolHandler.create);
// router.put('/:id', jocConsolHandler.edit);
router.get('/', jocConsolHandler.getAll);
// router.get('/:id', jocConsolHandler.get);
router.delete('/:id', jocConsolHandler.destroy);

module.exports = router;

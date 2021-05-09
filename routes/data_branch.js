const express = require('express');
const router = express.Router();
const dataBranchHandler = require('./handler/data-branch')

/* GET users listing. */
router.post('/', dataBranchHandler.create);
router.put('/:id', dataBranchHandler.edit);
router.get('/', dataBranchHandler.getAll);
router.get('/:id', dataBranchHandler.get);
router.delete('/:id', dataBranchHandler.destroy);

module.exports = router;

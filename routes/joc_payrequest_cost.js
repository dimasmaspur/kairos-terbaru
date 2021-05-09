const express = require('express');
const router = express.Router();
const jocPayrequestCost = require('./handler/joc-payrequest-cost');

/* GET users listing. */
router.post('/', jocPayrequestCost.create);
router.put('/:id', jocPayrequestCost.edit);
router.get('/:id', jocPayrequestCost.get);
router.get('/', jocPayrequestCost.getAll);
router.delete('/:id', jocPayrequestCost.destroy);

module.exports = router;

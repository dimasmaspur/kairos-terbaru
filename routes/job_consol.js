const express = require('express');
const router = express.Router();
const jobConsolHandler = require('./handler/job-consol');

/* GET users listing. */
router.post('/', jobConsolHandler.create);
router.put('/:id', jobConsolHandler.edit);
router.get('/', jobConsolHandler.getAll);
router.get('/:id', jobConsolHandler.get);
router.delete('/:id', jobConsolHandler.destroy);

module.exports = router;

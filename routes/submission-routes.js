const router = require('express').Router();

const useController = require('../controllers/submissions-controller');
router.route('/:id').get(useController.findAllForStudent);

module.exports = router;

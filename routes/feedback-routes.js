const router = require('express').Router();

const useController = require('../controllers/feedbacks-controller');

router.route('/').get(useController.index);

router.route('/:id').get(useController.findOne);

module.exports = router;

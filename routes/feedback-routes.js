const router = require('express').Router();

const useController = require('../controllers/feedbacks-controller');

// router.route('/').get(useController.index);

router.route('/:students_id').get(useController.findAllByStudentId);
router.route('/details/:id').get(useController.findOne);

module.exports = router;

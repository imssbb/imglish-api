const router = require('express').Router();

const useController = require('../controllers/audios-controller');

router.route('/').get(useController.index);

router.route('/:id').get(useController.findOne);

module.exports = router;

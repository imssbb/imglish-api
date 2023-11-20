const router = require('express').Router();
const useController = require('../controllers/student-controller');

router.route('/').get(useController.index);

router.route('/:id').get(useController.findOne);

// router.route('/:id/missions').get(useController.todaysMissionOnly);
// need to set up child? reference? to missions table, does the .references have to be in the mission or student?
// Filter just Today's Mission****

//See All Mission of student
// router.route('/:id/missions').get(useController.allMission);

// Audio Post
// /:id/

module.exports = router;

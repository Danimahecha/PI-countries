const { Router } = require('express');
const router = Router();
const activitiesController = require('../Controllers/activities');






router.post('/', activitiesController.postActivities);
module.exports = router;
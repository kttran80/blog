const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/lessons', meController.storedCourses);
router.get('/stored/news', meController.storedNews);

module.exports = router;

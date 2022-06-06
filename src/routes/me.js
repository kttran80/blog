const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/lessons', meController.storedLessons);
router.get('/trashed/lessons', meController.trashedLessons);
router.get('/stored/news', meController.storedNews);

module.exports = router;

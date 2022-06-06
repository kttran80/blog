const express = require('express');
const router = express.Router();

const lessonController = require('../app/controllers/LessonController');

router.get('/create', lessonController.create);
router.post('/store', lessonController.store);
router.get('/:id/edit', lessonController.edit);
router.get('/:id/delete', lessonController.delete);
router.put('/:id/update', lessonController.update);
router.get('/:slug', lessonController.show);

module.exports = router;

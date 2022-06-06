const express = require('express');
const router = express.Router();

const lessonController = require('../app/controllers/LessonController');

router.get('/create', lessonController.create);
router.post('/handle-form-actions', lessonController.handleFormAction);
router.get('/:id/edit', lessonController.edit);
router.post('/store', lessonController.store);
router.delete('/:id/delete', lessonController.delete);
router.put('/:id/update', lessonController.update);
router.patch('/:id/restore', lessonController.restore);
router.delete('/:id/force', lessonController.forceDelete);
router.get('/:slug', lessonController.show);

module.exports = router;

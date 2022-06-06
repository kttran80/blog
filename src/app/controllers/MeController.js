const Lesson = require('../models/Lesson');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /me/stored/lessons
    storedLessons(req, res, next) {
        Lesson.find({})
            .then((lessons) =>
                res.render('me/stored-lessons', {
                    lessons: multipleMongooseToObject(lessons),
                }),
            )
            .catch(next);
    }

    // [GET] /me/trashed/courses
    trashedLessons(req, res, next) {
        Lesson.findDeleted({})
            .then((lessons) =>
                res.render('me/trashed-lessons', {
                    lessons: multipleMongooseToObject(lessons),
                }),
            )
            .catch(next);
    }

    // [GET] /me/stored/news
    storedNews(req, res, next) {
        res.render('news');
    }
}

module.exports = new MeController();

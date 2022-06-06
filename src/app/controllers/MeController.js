const Lesson = require('../models/Lesson');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {
    // [GET] /me/stored/lessons
    storedLessons(req, res, next) {
        var lessonQuery = Lesson.find({});

        if (req.query.hasOwnProperty('_sort')) {
            lessonQuery = lessonQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        Promise.all([lessonQuery, Lesson.countDocumentsDeleted()])
            .then(([lessons, deletedCount]) =>
                res.render('me/stored-lessons', {
                    lessons: multipleMongooseToObject(lessons),
                    deletedCount,
                }),
            )
            .catch(next);
    }

    // [GET] /me/trashed/courses
    trashedLessons(req, res, next) {
        var lessonQuery = Lesson.findDeleted({});

        if (req.query.hasOwnProperty('_sort')) {
            lessonQuery = lessonQuery.sort({
                [req.query.column]: req.query.type,
            });
        }

        lessonQuery
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

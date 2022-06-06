const Lesson = require('../models/Lesson');
const { mongooseToObject } = require('../../utils/mongoose');
const res = require('express/lib/response');

class LessonController {
    show(req, res, next) {
        Lesson.findOne({ slug: req.params.slug })
            .then((lesson) => {
                var lesson = mongooseToObject(lesson);

                console.log(lesson);

                res.render('lesson/show', { lesson: lesson });
                // res.json(lesson))
            })
            .catch(next);
    }

    // GET /lesson/create
    create(req, res, next) {
        res.render('lesson/create');
    }

    // GET /lesson/:id/edit
    edit(req, res, next) {
        // console.log("edit id =",req.params.id);

        Lesson.findById(req.params.id)
            .then((lesson) =>
                res.render('lesson/edit', { lesson: mongooseToObject(lesson) }),
            )
            .catch(next);
    }

    // GET /lesson/delete
    delete(req, res, next) {
        Lesson.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/lessons'))
            .catch(next);
    }

    // POST /lesson/update
    update(req, res, next) {
        var formData = req.body;

        formData.image = `https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg`;

        console.log('********', req.params.id, formData);

        Lesson.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/lessons'))
            .catch(next);
    }

    store(req, res, next) {
        var formData = req.body;

        formData.image = `https://i.ytimg.com/vi/${req.body.videoid}/hqdefault.jpg`;

        const lesson = new Lesson(formData);

        lesson
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

module.exports = new LessonController();

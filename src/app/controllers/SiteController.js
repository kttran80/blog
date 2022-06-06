const Lesson = require('../models/Lesson');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class SiteController {
    // [GET[] /
    index(req, res, next) {
        Lesson.find({})
            .then((lessons) => {
                lessons = multipleMongooseToObject(lessons);

                res.render('home', { lessons });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const newsRouter = require('./news');
const meRouter = require('./me');
const lessonRouter = require('./lesson');
const siteRouter = require('./site');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/lesson', lessonRouter);

    app.use('/', siteRouter);
}

module.exports = route;

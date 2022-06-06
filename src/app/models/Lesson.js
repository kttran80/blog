const mongoose = require('mongoose');

var slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Lesson = new Schema(
    {
        title: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        slug: { type: String, maxLength: 255, slug: 'title', unique: true },
        level: { type: String, maxLength: 255 },
        videoid: { type: String, maxLength: 255 },
    },
    {
        timestamps: true,
    },
);

// add plugins
mongoose.plugin(slug);
Lesson.plugin(mongooseDelete, {
    deletedBy: true,
    deletedByType: String,
    deletedAt: true,
});
Lesson.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Lesson', Lesson);

const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;

mongoose.plugin(slug);

const lesson = new Schema(
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

module.exports = mongoose.model('Lesson', lesson);

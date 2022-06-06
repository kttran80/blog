const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect('mongodb://localhost/blog');

    if (mongoose.connection) {
        console.log('connecting to db sucessfully');
    } else {
        console.log('failed to connect to db');
    }
}

module.exports = { connect };

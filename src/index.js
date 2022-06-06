const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

//http logger
app.use(morgan('combined'));

// template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: ', path.join(__dirname, 'public'));

// routes init
route(app);

db.connect();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

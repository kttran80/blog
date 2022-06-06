const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const sortMiddleware = require('./app/middleware/SortMiddleware');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(methodOverride('_method'));

//custom middleware
app.use(sortMiddleware);

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
            sortable: (field, sort) => {
                const sortType = field == sort.column ? sort.type : 'default';

                const icons = {
                    default: 'bi bi-arrow-down-up',
                    asc: 'bi bi-arrow-up',
                    desc: 'bi bi-arrow-down',
                };

                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `<a href="?_sort&column=${field}&type=${type}">            
                        <i class="${icon}"></i>
                    </a>`;
            },
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

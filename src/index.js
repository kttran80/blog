const path = require('path');
const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');

const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

console.log('PATH: ', path.join(__dirname, 'public'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

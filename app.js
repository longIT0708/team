const express = require('express');
const ejs = require('ejs');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.use(express.static('public'));


app.listen(3000, function () {
    console.log('listening on http://localhost:3000');
})

require('./routes/home')(app);
require('./routes/category')(app);
require('./routes/product')(app);
require('./routes/login')(app);


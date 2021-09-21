//
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');

const index = require('./routes/index');
const about = require('./routes/about');

app.use(index);
app.use(about);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

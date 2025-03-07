const express = require('express');
const app = express();
const indexRouter = require('./routes/index');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

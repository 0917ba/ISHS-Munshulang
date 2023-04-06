const express = require('express');
const app = express();

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');


app.use('/', indexRouter);
app.use('/user', userRouter);


app.use(express.static('public'));
app.set('view engine', 'ejs');


app.listen(3000, (err) => {
    console.log("The server is listening on port 3000");
});
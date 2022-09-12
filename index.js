const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    { default: mongoose } = require('mongoose'),
    app = express(),
    port = 3000;

// Import the Controllers
const categoryRoute = require('./Controllers/category'),
    userRoute = require('./Controllers/user'),
    apiRoute = require('./Controllers/api'),
    bookmarkRoute = require('./Controllers/bookmark');

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect mongo
mongoose.connect('mongodb://127.0.0.1:27017/apidb', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

// routes    
app.use('/category', categoryRoute);
app.use('/user', userRoute);
app.use('/api', apiRoute);
app.use('/bookmark', bookmarkRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})
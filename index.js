const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    { default: mongoose } = require('mongoose'),
    app = express(),
    port = 3000,
    connectionString = 'mongodb+srv://admin:Password1@cluster0.101ejri.mongodb.net/test';

// Import the Controllers
const categoryRoute = require('./Controllers/category'),
    userRoute = require('./Controllers/user'),
    apiRoute = require('./Controllers/api'),
    bookmarkRoute = require('./Controllers/bookmark'),
    pages = require('./Controllers/pages');

//Static content
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect mongo
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

// routes    
app.use('/', pages);
app.use('/category', categoryRoute);
app.use('/user', userRoute);
app.use('/api', apiRoute);
app.use('/bookmark', bookmarkRoute);

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})
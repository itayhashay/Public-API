const express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    { default: mongoose } = require('mongoose'),
    app = express(),
    port = 3000;

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/apidb', { useNewUrlParser: true })
    .then(() => {
        console.log("mongo connection open!!");
    }).catch(err => {
        console.log("no connection start");
    })

app.listen(port, () => {
    console.log(`listening on port ${port}!`);
})



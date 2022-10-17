const express = require('express'),
    expressLayouts = require('express-ejs-layouts');

let cards_mocks = [
    {
        id: "1",
        img: "img/GerbilCropped.png",
        title: "API 1",
        desc: "BLAHHHHHHHHHHHHHjfhgdkjfkjfdsghkjfdshgkjfdshgksjdhgkjsfdhgkjshdgkjhsfgkjhsfdkjgh jdsfhds dskjfh skjdfh jskhdf kjdshf ksjdhf kjdshf",
        upvotes: 45,
        article: "https://google.com",
        userImg: "img/GerbilCropped.png",
        userProfileUrl: "gerbils.io"
    },
    {
        id: "2",
        img: "img/pitbull2.jpg",
        title: "PITBULLLLLLLLL",
        desc: "YEAHHHHHHHHHHHHHHHHHHH",
        upvotes: 69,
        article: "https://pitbull.com",
        userImg: "img/pitbull1.jpg",
        userProfileUrl: "https://pitbull.io"
    },
    {
        id: "3",
        img: "img/pitbull1.jpg",
        title: "PITBULLLLLLLLL",
        desc: "YEAHHHHHHHHHHHHHHHHHHH \n the \n line \n is new \n cant see me ",
        upvotes: 6969,
        article: "https://pitbull.com",
        userImg: "img/pitbull2.jpg",
        userProfileUrl: "https://pitbull.io"
    },
    {
        id: "1",
        img: "img/GerbilCropped.png",
        title: "API 1",
        desc: "BLAHHHHHHHHHHHHHjfhgdkjfkjfdsghkjfdshgkjfdshgksjdhgkjsfdhgkjshdgkjhsfgkjhsfdkjgh jdsfhds dskjfh skjdfh jskhdf kjdshf ksjdhf kjdshf",
        upvotes: 45,
        article: "https://google.com",
        userImg: "img/GerbilCropped.png",
        userProfileUrl: "gerbils.io"
    },
    {
        id: "2",
        img: "img/pitbull2.jpg",
        title: "PITBULLLLLLLLL",
        desc: "YEAHHHHHHHHHHHHHHHHHHH",
        upvotes: 69,
        article: "https://pitbull.com",
        userImg: "img/pitbull1.jpg",
        userProfileUrl: "https://pitbull.io"
    },
    {
        id: "3",
        img: "img/pitbull1.jpg",
        title: "PITBULLLLLLLLL",
        desc: "YEAHHHHHHHHHHHHHHHHHHH \n the \n line \n is new \n cant see me ",
        upvotes: 6969,
        article: "https://pitbull.com",
        userImg: "img/pitbull2.jpg",
        userProfileUrl: "https://pitbull.io"
    },
]

let analytics = {
    total_apis: "340",
    total_users: "3400" ,
    total_upvotes: "2500"
}


module.exports = function(app) {
    app.use(expressLayouts)
    app.get('/', function(req, res){
        res.render('Cards',
        { 
            cards: cards_mocks,
            layout: 'Layouts/navbar.ejs'
        }
        )
    })

    app.get('/admin', function(req, res){
        res.render('dashboard',
        { 
            analytics: analytics,
            layout: 'Layouts/dashboard.ejs'
        }
        )
    })
}
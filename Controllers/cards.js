const express = require('express'),
    expressLayouts = require('express-ejs-layouts');


let cards_mocks = [
    {
        id: "1",
        img: "img/GerbilCropped.png",
        title: "API 1",
        desc: "BLAHHHHHHHHHHHHH",
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
]


module.exports = function(app) {
    app.use(expressLayouts)
    app.get('/', function(req, res){
        res.render('Cards',
        { 
            cards: cards_mocks,
            layout: 'Layouts/bootstrap.ejs'
        }
        )
    })
};
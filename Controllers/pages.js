const User = require("../Models/user"),
  Bookmarks = require("../Models/bookmark"),
  Api = require("../Models/api"),
  Category = require("../Models/category");
const express = require("express"),
  expressLayouts = require("express-ejs-layouts"),
  router = express.Router();

let cards_mocks = [
  {
    id: "1",
    img: "img/GerbilCropped.png",
    title: "API 1",
    desc: "BLAHHHHHHHHHHHHHjfhgdkjfkjfdsghkjfdshgkjfdshgksjdhgkjsfdhgkjshdgkjhsfgkjhsfdkjgh jdsfhds dskjfh skjdfh jskhdf kjdshf ksjdhf kjdshf",
    upvotes: 45,
    article: "https://google.com",
    userImg: "img/GerbilCropped.png",
    userProfileUrl: "gerbils.io",
  },
  {
    id: "2",
    img: "img/pitbull2.jpg",
    title: "PITBULLLLLLLLL",
    desc: "YEAHHHHHHHHHHHHHHHHHHH",
    upvotes: 69,
    article: "https://pitbull.com",
    userImg: "img/pitbull1.jpg",
    userProfileUrl: "https://pitbull.io",
  },
  {
    id: "3",
    img: "img/pitbull1.jpg",
    title: "PITBULLLLLLLLL",
    desc: "YEAHHHHHHHHHHHHHHHHHHH \n the \n line \n is new \n cant see me ",
    upvotes: 6969,
    article: "https://pitbull.com",
    userImg: "img/pitbull2.jpg",
    userProfileUrl: "https://pitbull.io",
  },
  {
    id: "1",
    img: "img/GerbilCropped.png",
    title: "API 1",
    desc: "BLAHHHHHHHHHHHHHjfhgdkjfkjfdsghkjfdshgkjfdshgksjdhgkjsfdhgkjshdgkjhsfgkjhsfdkjgh jdsfhds dskjfh skjdfh jskhdf kjdshf ksjdhf kjdshf",
    upvotes: 45,
    article: "https://google.com",
    userImg: "img/GerbilCropped.png",
    userProfileUrl: "gerbils.io",
  },
  {
    id: "2",
    img: "img/pitbull2.jpg",
    title: "PITBULLLLLLLLL",
    desc: "YEAHHHHHHHHHHHHHHHHHHH",
    upvotes: 69,
    article: "https://pitbull.com",
    userImg: "img/pitbull1.jpg",
    userProfileUrl: "https://pitbull.io",
  },
  {
    id: "3",
    img: "img/pitbull1.jpg",
    title: "PITBULLLLLLLLL",
    desc: "YEAHHHHHHHHHHHHHHHHHHH \n the \n line \n is new \n cant see me ",
    upvotes: 6969,
    article: "https://pitbull.com",
    userImg: "img/pitbull2.jpg",
    userProfileUrl: "https://pitbull.io",
  },
];

let analytics = {
  total_apis: "340",
  total_users: "3400",
  total_upvotes: "2500",
};

let categories = [
  {
    categoryId: "animals", // specify the category id you chose
    categoryName: "Animals",
    categoryDesc: "This category is for all the animal lovers out there.",
  },
  {
    categoryId: "books", // specify the category id you chose
    categoryName: "Books",
    categoryDesc: "This category is for all the book lovers out there.",
  },
  {
    categoryId: "art-design", // specify the category id you chose
    categoryName: "Art & Design",
    categoryDesc: "This category is for all the art & design lovers out there.",
  },
];

let apis_mocks = [
  {
    id: "5",
    name: "Random Dog Image",
    description: "load random cat image",
    url: "https://google.com",
    categoryId: "animals",
    upvotes: 450,
    upload_by: "user2",
  },
  {
    id: "4",
    name: "Random Tiger Image",
    description: "load random Tiger image",
    url: "https://google.com",
    categoryId: "animals",
    upvotes: 145,
    upload_by: "user3",
  },
  {
    id: "3",
    name: "British National Bibliography",
    description: "Free books API",
    url: "https://google.com",
    categoryId: "Books",
    upvotes: 245,
    upload_by: "user4",
  },
  {
    id: "2",
    name: "Bible-api",
    description: "Free Bible API with multiple languages",
    url: "https://google.com",
    categoryId: "Books",
    upvotes: 445,
    upload_by: "user5",
  },
  {
    id: "1",
    name: "URLhaus",
    description: "Bulk queries and Download Malware Samples	",
    url: "https://google.com",
    categoryId: "Art & Design",
    upvotes: 645,
    upload_by: "user6",
  },
];

let users_mocks = [
  {
    // firstName and the first letter of the lastName
    username: "EitanA",
    firstName: "Eitan",
    lastName: "Azaria",
    birthday: "1989-01-01",
    email: "EitanA@gmail.com",
    userType: "client",
  },
  {
    // firstName and the first letter of the lastName
    username: "MikeD",
    firstName: "Mike",
    lastName: "Danilo",
    birthday: "1979-01-01",
    email: "MikeD@gmail.com",
    userType: "Admin",
  },
  {
    // firstName and the first letter of the lastName
    username: "JohnB",
    firstName: "John",
    lastName: "Bloomberg",
    birthday: "1959-01-01",
    email: "JohnB@gmail.com",
    userType: "client",
  },
  {
    // firstName and the first letter of the lastName
    username: "MosheD",
    firstName: "Moshe",
    lastName: "Davidov",
    birthday: "1994-01-01",
    email: "MosheD@gmail.com",
    userType: "client",
  },
  {
    // firstName and the first letter of the lastName
    username: "EliC",
    firstName: "Eli",
    lastName: "Copter",
    birthday: "1996-01-01",
    email: "EliC@gmail.com",
    userType: "client",
  },
];

router.use(expressLayouts);
router.get("/", async (req, res) => {
  const apis = await Api.find({});
  res.render("Cards", {
    cards: apis,
    layout: "Layouts/navbar.ejs",
  });
});

router.get("/test", async (req, res) => {
  res.render("submit-new-api", {
    options: ["test1", "test2", "test3"],
    layout: "Layouts/navbar.ejs",
  });
});

router.get("/add-api", async (req, res) => {
  res.render("submit-new-api", {
    options: ["test1", "test2", "test3"],
    layout: "Layouts/main-div.ejs",
  });
});

// admin path
router.get("/admin", (req, res) => {
  res.render("dashboard", {
    analytics: analytics,
    layout: "Layouts/admin.ejs",
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    analytics: analytics,
    layout: "Layouts/main-div.ejs",
  });
});

router.get("/manage-apis", (req, res) => {
  res.render("manage-apis", {
    apis: apis_mocks,
    layout: "Layouts/main-div.ejs",
  });
});
// admin path
router.get("/manage-users", (req, res) => {
  res.render("manage-users", {
    users: users_mocks,
    layout: "Layouts/main-div.ejs",
  });
});

router.get("/manage-categories", (req, res) => {
  res.render("manage-categories", {
    categories: categories,
    layout: "Layouts/main-div.ejs",
  });
});

/* Isar - This is an example for you..*/
router.get("/latest-apis", (req, res) => {
  res.render("cards", {
    cards: cards_mocks,
    layout: "Layouts/main-div.ejs",
  });
});
router.get("/best-rated-apis", (req, res) => {
  res.render("cards", {
    cards: cards_mocks,
    layout: "Layouts/main-div.ejs",
  });
});
router.get("/random-apis", (req, res) => {
  res.render("cards", {
    cards: cards_mocks,
    layout: "Layouts/main-div.ejs",
  });
});
router.get("/bookmarks", (req, res) => {
  res.render("cards", {
    cards: cards_mocks,
    layout: "Layouts/main-div.ejs",
  });
});

router.get("/add-api", (req, res) => {
  res.render("add-api", {
    layout: "Layouts/main-div.ejs",
  });
});

router.get("/profile", (req, res) => {
  res.render("profile", {
    // profile: profile,
    layout: "Layouts/main-div.ejs",
  });
});
router.get("/sign-up", (req, res) => {
  res.render("sign-up", {
    // profile: profile,
    layout: "Layouts/StandAlonePage.ejs",
  });
});
router.get("/login", (req, res) => {
  res.render("login", {
    // profile: profile,
    layout: "Layouts/StandAlonePage.ejs",
  });
});

module.exports = router;

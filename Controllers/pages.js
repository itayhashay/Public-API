const User = require("../Models/user"),
    Bookmarks = require("../Models/bookmark"),
    Api = require("../Models/api"),
    Category = require("../Models/category"),
    express = require("express"),
    expressLayouts = require("express-ejs-layouts"),
    router = express.Router();

router.use(expressLayouts);

const middleware = (req, res, next) => {
    if (req.cookies.username)
        next();
    else
        res.redirect('/login');
}

const homePageMiddleware = (req, res, next) => {
    if (req.cookies.type && req.cookies.type.toLowerCase() == 'client')
        next();
    else if (req.cookies.type && req.cookies.type.toLowerCase() == 'admin')
        res.redirect('/admin');
    else
        res.redirect('/login');
}

const isAdmin = (req, res, next) => {
    if (req.cookies.type && req.cookies.type.toLowerCase() == 'admin')
        next();
    else
        res.redirect('/login');
}

const isLoggedIn = (req, res, next) => {
    if (req.cookies.username)
        res.redirect('/');
    else
        next();
}

router.get("/", homePageMiddleware, async (req, res) => {
    let { name, uploadby, category, text } = req.query;
    let query = [];
    if (text !== undefined) {
        if (name == 'true') {
            query = [...query, { name: { $regex: text, $options: 'i' } }]
        }
        if (uploadby == 'true') {
            query = [...query, { uploadBy: { $regex: text, $options: 'i' } }]
        }
        if (category == 'true') {
            query = [...query, { category: { $regex: text, $options: 'i' } }]
        }
    }
    let apis = query.length == 0 ? await Api.find({}) : await Api.find({
        $or: query
    });
    res.render("Cards", {
        cards: apis,
        layout: "Layouts/navbar.ejs",
    });
});

router.get("/render", middleware, async (req, res) => {
    const apis = req;
    console.log(req)
    res.render("Cards", {
        cards: apis,
        layout: "Layouts/navbar.ejs",
    });
});

router.get("/test", middleware, async (req, res) => {
    res.render("submit-new-api", {
        options: ["test1", "test2", "test3"],
        layout: "Layouts/navbar.ejs",
    });
});

router.get("/edit-api/:id", middleware, async (req, res) => {
    let api = await Api.findById(req.params.id);
    let categories = await Category.find({});
    categories = categories.map(c => c.name)
    res.render("edit-api-form", {
        options: categories,
        api: api,
        layout: "Layouts/main-div.ejs",
    });
});

router.get("/edit-category/:id", middleware, async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.render("edit-category-form", {
        category: category,
        layout: "Layouts/main-div.ejs"
    });
});

router.get("/edit-user/:id", middleware, async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render("edit-user-form", {
        user: user,
        layout: "Layouts/main-div.ejs"
    });
});


router.get("/add-api", middleware, async (req, res) => {
    let categories = await Category.find({});
    categories = categories.map(c => c.name)
    res.render("submit-new-api", {
        options: categories,
        layout: "Layouts/main-div.ejs",
    });
});

router.get("/add-category", middleware, async (req, res) => {
    res.render("new-category-form", {
        layout: "Layouts/main-div.ejs",
    });
});

router.get("/add-user", middleware, async (req, res) => {
    res.render("new-user-form", {
        layout: "Layouts/main-div.ejs",
    });
});


// admin path
router.get('/admin', isAdmin, async (req, res) => {
    const apis_count = await Api.countDocuments();
    const users_count = await User.countDocuments();
    const sum_upvotes = await Api.aggregate([
        { $group: { _id: null, sum: { $sum: "$upvotes" } } }
    ]);
    let analytics = {
        total_apis: apis_count,
        total_users: users_count,
        total_upvotes: sum_upvotes[0] == null ? 0 : sum_upvotes[0].sum
    }
    res.render('dashboard',
        {
            analytics: analytics,
            layout: 'Layouts/admin.ejs'
        }
    )
})

router.get('/dashboard', isAdmin, async (req, res) => {
    const apis_count = await Api.countDocuments();
    const users_count = await User.countDocuments();
    const sum_upvotes = await Api.aggregate([
        { $group: { _id: null, sum: { $sum: "$upvotes" } } }
    ]);
    const categories = await Api.aggregate([
        {
            $group: {
                _id: '$category',
                count: { $sum: 1 } // this means that the count will increment by 1
            }
        }
    ]);
    const users = await Api.aggregate([
        {
            $group: {
                _id: '$uploadBy',
                count: { $sum: 1 } // this means that the count will increment by 1
            }
        }
    ]);
    let analytics = {
        total_apis: apis_count,
        total_users: users_count,
        total_upvotes: sum_upvotes[0].sum
    }
    res.render('dashboard',
        {
            analytics: analytics,
            users: users,
            layout: 'Layouts/main-div.ejs'
        }
    )
})

router.get('/manage-apis', isAdmin, async (req, res) => {
    const apis = await Api.find({});
    res.render('manage-apis',
        {
            apis: apis,
            layout: 'Layouts/main-div.ejs'
        }
    )
})
// admin path
router.get('/manage-users', isAdmin, async (req, res) => {
    const users = await User.find({});
    res.render('manage-users',
        {
            users: users,
            layout: 'Layouts/main-div.ejs'
        }
    )
})

router.get('/manage-categories', isAdmin, async (req, res) => {
    const category = await Category.find({});
    res.render('manage-categories',
        {
            categories: category,
            layout: 'Layouts/main-div.ejs'
        }
    )
})

router.get('/latest-apis', middleware, async (req, res) => {
    let { name, uploadby, category, text } = req.query;
    let query = [];
    if (text !== undefined) {
        if (name == 'true') {
            query = [...query, { name: { $regex: text, $options: 'i' } }]
        }
        if (uploadby == 'true') {
            query = [...query, { uploadBy: { $regex: text, $options: 'i' } }]
        }
        if (category == 'true') {
            query = [...query, { category: { $regex: text, $options: 'i' } }]
        }
    }
    let apis = query.length == 0 ? await Api.find({}).sort([['date', -1]]) : await Api.find({
        $or: query
    }).sort([['date', -1]]);
    res.render('cards',
        {
            cards: apis,
            layout: 'Layouts/main-div.ejs'
        }
    )
})

router.get('/best-rated-apis', middleware, async (req, res) => {
    const apis = await Api.find({}).sort({ upvotes: 'descending' }).limit(5);
    res.render('cards',
        {
            cards: apis,
            layout: 'Layouts/main-div.ejs'
        }
    )
})

router.get('/random-apis', middleware, async (req, res) => {
    const apis = await Api.find({});
    const api = [];
    api[0] = apis[Math.floor(Math.random() * apis.length - 1)];
    res.render('cards',
        {
            cards: api,
            layout: 'Layouts/main-div.ejs'
        }
    )
});

router.get('/bookmarks', middleware, async (req, res) => {
    let username = req.cookies.username ? req.cookies.username : "itayhashay";
    const user = await User.find({ username: username });
    const userId = user[0]._id.toString();
    const bookmarks = await Bookmarks.find({ userId: userId });
    let data = [];
    for (let i = 0; i < bookmarks.length; i++) {
        let book = await bookmarkParser(bookmarks[i]);
        data[i] = book.api;
    }
    res.render('cards',
        {
            cards: data,
            layout: 'Layouts/main-div.ejs'
        }
    )
})

router.get("/profile", middleware, async (req, res) => {
    let username = req.cookies.username ? req.cookies.username : "itayhashay";
    let user = await User.find({ username: username });
    res.render("profile", {
        user: user[0],
        layout: "Layouts/main-div.ejs",
    });
});
router.get("/sign-up", isLoggedIn, (req, res) => {
    res.render("sign-up", {
        // profile: profile,
        layout: "Layouts/StandAlonePage.ejs",
    });
});
router.get("/login", isLoggedIn, (req, res) => {
    res.render("login", {
        // profile: profile,
        layout: "Layouts/StandAlonePage.ejs",
    });
});

const bookmarkParser = async (bookmark) => {
    let user, api;
    user = await User.findById(bookmark.userId)
    delete user['_doc']["password"];
    api = await Api.findById(bookmark.apiId)
    let data = {
        "id": bookmark.id,
        "user": user,
        "api": api
    }
    return data
}

module.exports = router;

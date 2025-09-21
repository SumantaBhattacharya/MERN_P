const {Router} = require("express");
const User = require("../models/user.model");

const router = Router();

router.get('/signin', (req, res) => {
   return res.render('signin');
});

router.get('/signup', (req, res) => {
   return res.render('signup');
});

router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    await User.create({ username, email, password });

    return res.redirect("/");

})

module.exports = router;

// the new keyword in JavaScript is used when you want to create an instance of an object that’s defined by a constructor function or a class.
// ex- const user = new User({ username: "john", email: "john@mail.com" });
// User here is a Mongoose model (a constructor function created by mongoose.model()).
// Using new User(...) creates a new document instance that has all the model methods (save, validate, etc.).
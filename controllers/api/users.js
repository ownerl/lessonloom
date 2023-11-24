const User = require("../../models/user");

module.exports = {
    login,
};

async function login(req, res) {
    const userInfo = req.body.userInfo;
    console.log("this is req info from login route: ", req.body);
    console.log("dis da client id: ", req.body.CLIENT_ID);
    console.log("dis da token id: ", req.body.idToken);
    try {
        // A user has logged in with OAuth...
        console.log('before find user')
        let user = await User.findOne({ googleId: userInfo.googleId });
        // Existing user found, so provide it to passport
        console.log('after find user: ', user)
        if (user) return user;
        console.log('after if return')
        const newUser = await User.create({
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture,
            googleId: userInfo.sub,
        });
        console.log('the user after awaits: ', newUser)
        res.json(newUser);
    } catch (err) {
        res.json(err);
    }
}


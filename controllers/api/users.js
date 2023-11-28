const User = require("../../models/user");

module.exports = {
    login,
};

async function login(req, res) {
    if (req.body) {
        const userInfo = req.body.userInfo;
        console.log("this is req info from login route: ", req.body);
        console.log("dis da client id: ", req.body.CLIENT_ID);
        console.log("dis da token id: ", req.body.idToken);
        // A user has logged in with OAuth...
        console.log("before find user");
        console.log("userinfo google stuff: ", userInfo);
        const existingUser = await User.find({
            googleId: userInfo.googleId,
        })
        if (existingUser.length >= 1) {
            console.log('user found! ', existingUser)
            return existingUser;
        }

        try {
            console.log("inside the try block!");
            const newUser = await User.create({
                name: userInfo.name,
                googleId: userInfo.googleId,
                email: userInfo.email,
                picture: userInfo.picture,
            });
            console.log("new user being created! ", newUser);
            res.json(newUser);
        } catch (err) {
            res.json(err);
        }
        console.log("existing user is: ", existingUser);
    }
}

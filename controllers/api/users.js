const User = require("../../models/user");

module.exports = {
    login,
    courseCreated,
    courseSaved,
    coursesArray,
};

async function login(req, res) {
    if (req.body) {
        const userInfo = req.body.userInfo;
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

async function courseCreated(req, res) {
    if (req.body) {
        const existingUser = await User.find({
            googleId: req.body.user.googleId,
        })
        console.log('course info passed in: ', req.body.courseInfo)
        console.log('got this far in!', existingUser[0], ' and array: ', existingUser[0].name)
        try {
            existingUser[0].createdCourses.push(req.body.courseInfo._id)
            existingUser[0].save();
            res.json(existingUser[0])
        } catch(err) {
            res.json(err)
        }
    }
}

async function courseSaved(req, res) {
    if (req.body) {
        const existingUser = await User.find({
            googleId: req.body.user.googleId,
        })
        try {
            existingUser.savedCourses.push(req.body.courseInfo._id);
            existingUser.save();
            res.json(existingUser);
        } catch(err) {
            res.json(err)
        }
    }
}

async function coursesArray(req, res) {
    if (req.body) {
        console.log('req filter: ',req.body.filter)
        const existingUser = await User.findOne({
            googleId: req.body.user.googleId,
        }).populate([{
            path: `${req.body.filter.filter}`,
            options: {strictPopulate: false}
          }]);
        console.log('createdCourses in controller: ', existingUser.createdCourses)
        res.json(existingUser)
    }
}


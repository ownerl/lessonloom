const User = require("../../models/user")

module.exports = {
	login,
	courseCreated,
	courseSaved,
	coursesArray,
}

async function login(req, res) {
	if (req.body) {
		const userInfo = req.body.userInfo
		const existingUser = await User.find({
			googleId: userInfo.googleId,
		})
		if (existingUser.length >= 1) {
			return existingUser
		}

		try {
			const newUser = await User.create({
				name: userInfo.name,
				googleId: userInfo.googleId,
				email: userInfo.email,
				picture: userInfo.picture,
			})
			res.json(newUser)
		} catch (err) {
			res.json(err)
		}
	}
}

async function courseCreated(req, res) {
	if (req.body) {
		const existingUser = await User.find({
			googleId: req.body.user.googleId,
		})
		try {
			existingUser[0].createdCourses.push(req.body.courseInfo._id)
			existingUser[0].save()
			res.json(existingUser[0])
		} catch (err) {
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
			existingUser.savedCourses.push(req.body.courseInfo._id)
			existingUser.save()
			res.json(existingUser)
		} catch (err) {
			res.json(err)
		}
	}
}

async function coursesArray(req, res) {
	if (req.body) {
		const existingUser = await User.findOne({
			googleId: req.body.user.googleId,
		}).populate([
			{
				path: `${req.body.filter.filter}`,
				options: {strictPopulate: false},
			},
		])
		res.json(existingUser)
	}
}

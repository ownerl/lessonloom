const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    create,
    login,
    checkToken,
}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        // token will be a string
        const token = createJWT(user);
        // we can use res.json to send back just a string
        // the client code needs to take this into consideration
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

function createJWT(user) {
    return jwt.sign(
        // data payload
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}

async function login(req, res) {
    // console.log('this is the user login info in the req body: ', req.body)
    // console.log(req.body.email)
    // console.log(typeof(req.body))
    console.log(req.headers)
    console.log(req.method)
    console.log(req.body)
    try {
        const user = await User.findOne({'email': req.body.email});
        const loginMatch = await bcrypt.compare(req.body.password, user.password);
        console.log(loginMatch)
        if (!loginMatch) {
            throw new Error();
        }
        const token = createJWT(user);
        res.json(token);

    } catch (err) {
        console.log('didnt work')
        res.status(400).json('Bad Credentials');
    }
}

function checkToken(req, res) {
    // req.user will always be there for you when a token is sent
    res.json(req.exp);
}
const { loginUser } = require("./users-api")
const { jwtDecode } = require("jwt-decode")

export default function checkToken(setUser) {
    const token = localStorage.getItem("token");
    if (token) {
        const userObject = jwtDecode(token);
        const newUser = {
            name: userObject.name,
            email: userObject.email,
            picture: userObject.picture,
            googleId: userObject.sub,
        };
        const userData = {
            userInfo: newUser,
            idToken: token,
            CLIENT_ID: process.env.REACT_APP_GOOGLE_CLIENT_ID
        }
        console.log(newUser.googleId)
        setUser(newUser);
        loginUser(userData);
    }
}
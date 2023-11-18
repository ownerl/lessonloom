const passport = require("passport");
require('dotenv').config()

export default {
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    GOOGLE_CALLBACK: process.env.GOOGLE_CALLBACK
}
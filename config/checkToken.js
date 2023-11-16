const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // check if token is sent in header or as query parameter
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        // remove the 'Bearer' if it was included in token header
        token = token.replace('Bearer ', ''); // I forgot to include a space after Bearer, so it kept mismatching the token >:(
        // check if token is valid/not expired
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            // if valid token, decoded will be token's entire payload
            // if invalid token, err will be set
            req.user = err ? null : decoded.user;
            // if your app cares ... (optional)
            req.exp = err ? null : new Date(decoded.exp * 1000);
            return next();
        });
    } else {
        // no token sent
        req.user = null;
        return next();
    }
};
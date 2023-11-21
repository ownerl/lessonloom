const jwt = require('jwt-decode')

module.exports = function(req, res, next) {
    // check if token is sent in header or as query parameter
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        // remove the 'Bearer' if it was included in token header
        token = token.replace('Bearer ', ''); // I forgot to include a space after Bearer, so it kept mismatching the token >:(
        // check if token is valid/not expired
        console.log('the token inside checkToken.js before verification: ', token)
        const decoded = jwt.jwtDecode(token);
        console.log('decoded token: ', decoded)
        if (decoded.exp > 0 && decoded.sub) {
            // if valid token, decoded will be token's entire payload
            req.user = decoded.user;
            // if your app cares ... (optional)
            req.exp = new Date(decoded.exp * 1000);
            console.log('token was successfully passed to req.user')
            return next();
        } else {
            console.log('invalid token yo!')
            return next();
        };
    } else {
        // no token sent
        req.user = null;
        return next();
    }
};
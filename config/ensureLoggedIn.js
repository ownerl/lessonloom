module.exports = function(req, res, next) {
    // status code of 401 is unauthorized
    if (!req.isAuthenticated()) return res.status(401).json('Unauthorized');
    next();
}
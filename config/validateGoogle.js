const { OAuth2Client } = require("google-auth-library");


module.exports = async function(req, res, next) {
    const clientInfo = req.body;
    const CLIENT_ID = clientInfo.CLIENT_ID;
    const idToken = clientInfo.idToken;
    const client = new OAuth2Client(CLIENT_ID);
    console.log('client info in validate google: ', clientInfo)
    console.log('the idtoken passed into validateGoogle: ', idToken)
    try {
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload["sub"];
        // Perform server-side actions using the verified user information

        req.user = payload;
        next();
        // res.status(200).send("Token verification successful");
    } catch (error) {
        console.error("Error verifying token:", error.message);
        next();
        // res.status(401).send("Token verification failed");
    }
};
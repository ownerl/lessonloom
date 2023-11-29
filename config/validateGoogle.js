const { OAuth2Client } = require("google-auth-library");

module.exports = async function (req, res, next) {
    console.log('this is the headers sent in req.headers: ', req.headers.tokenid)
    const idToken = req.headers.tokenid;
    const CLIENT_ID = req.headers.client_id;

    if (!idToken || !CLIENT_ID) {
        return res.status(401).json({ error: "Missing Google credentials" });
    }
    const client = new OAuth2Client(CLIENT_ID);
    console.log("client info in validate google: ", req.headers);
    console.log("the idtoken passed into validateGoogle: ", idToken);
    try {
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload["sub"];
        console.log("Token verified");
        next();
    } catch (error) {
        console.error("Error verifying token:", error.message);
        return res.status(401).json({ error: "Invalid Google credentials" });
    }
};

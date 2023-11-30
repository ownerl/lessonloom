const { OAuth2Client } = require("google-auth-library");

module.exports = async function (req, res, next) {
    const idToken = req.headers.tokenid;
    const CLIENT_ID = req.headers.client_id;

    if (!idToken || !CLIENT_ID) {
        return res.status(401).json({ error: "Missing Google credentials" });
    }
    const client = new OAuth2Client(CLIENT_ID);
    try {
        const ticket = await client.verifyIdToken({
            idToken: idToken,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload["sub"];
        next();
    } catch (error) {
        console.error("Error verifying token:", error.message);
        return res.status(401).json({ error: "Invalid Google credentials" });
    }
};

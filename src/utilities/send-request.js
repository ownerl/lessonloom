export default async function sendRequest(url, method = "GET", payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, specifiy the method, etc.
    const options = { method };
    if (payload) {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(payload);
    }
    const token = localStorage.getItem("token");
    // console.log("token from send-request.js: ", token);
    if (token) {
        // Need to add an Authorization header
        // Use the Logical OR Assignment operator
        options.headers ||= {};
        // Older approach
        // options.headers = options.headers || {};
        options.headers["tokenid"] = token;
        options.headers["client_id"] = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    }
    console.log(url, " and options: ", options);
    try {
        const res = await fetch(url, options);
        if (res.ok) return res.json();
    } catch (err) {
        throw new Error("Bad Request");
    }
    // if res.ok is false then something went wrong
}

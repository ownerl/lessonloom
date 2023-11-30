export default async function sendRequest(url, method = "GET", payload = null) {
    const options = { method };
    if (payload) {
        options.headers = { "Content-Type": "application/json" };
        options.body = JSON.stringify(payload);
    }
    const token = localStorage.getItem("token");
    if (token) {
        options.headers ||= {};
        options.headers["tokenid"] = token;
        options.headers["client_id"] = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    }
    try {
        const res = await fetch(url, options);
        if (res.ok) return res.json();
    } catch (err) {
        throw new Error("Bad Request");
    }
}

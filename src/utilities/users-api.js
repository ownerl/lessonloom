import { jwtDecode } from "jwt-decode";
import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export function loginUser(userInfo) {
    return sendRequest(`${BASE_URL}/login`, "POST", userInfo);
}

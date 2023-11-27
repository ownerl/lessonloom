import sendRequest from "./send-request";

const BASE_URL = "/api/lessons";

// Retrieve an unpaid order for the logged in user
export function getLesson(lessonId) {
    return sendRequest(`${BASE_URL}/${lessonId}`);
}

export function createLesson(lessonId) {
    return sendRequest(`${BASE_URL}/new`, "POST", lessonId);
}

import sendRequest from "./send-request";

const BASE_URL = "/api/courses";

export function getCourse(courseId) {
    return sendRequest(`${BASE_URL}/${courseId}`);
}

export function createCourse(formInfo, user) {
    return sendRequest(`${BASE_URL}/new`, "POST", { formInfo, user });
}

export function addLesson(courseId, lessonId) {
    return sendRequest(`${BASE_URL}/${courseId}/addLesson`, "POST", lessonId);
}

export function getAllCourses(filter) {
    return sendRequest(`${BASE_URL}/`, "POST", filter);
}

export function updateCourse(courseId, editInfo) {
    return sendRequest(`${BASE_URL}/${courseId}/update`, "PUT", editInfo);
}

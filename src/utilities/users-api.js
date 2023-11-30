import sendRequest from "./send-request"

const BASE_URL = "/api/users"

export function loginUser(userInfo) {
	return sendRequest(`${BASE_URL}/login`, "POST", userInfo)
}
export function createdCourses(courseInfo, user) {
	return sendRequest(`${BASE_URL}/created`, "POST", {courseInfo, user})
}
export function savedCourses(courseInfo, user) {
	return sendRequest(`${BASE_URL}/saved`, "POST", {courseInfo, user})
}

export function coursesArray(filter, user) {
	return sendRequest(`${BASE_URL}/coursesArray`, "POST", {filter, user})
}

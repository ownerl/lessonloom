import sendRequest from './send-request'

const BASE_URL = '/api/courses'

// Retrieve an unpaid order for the logged in user
export function getCourse(courseId) {
  return sendRequest(`${BASE_URL}/${courseId}`)
}

export function createCourse(formInfo, user) {
  return sendRequest(`${BASE_URL}/new`, 'POST', {formInfo, user})
}

export function addLesson(courseId, lessonId) {
  return sendRequest(`${BASE_URL}/${courseId}/addLesson`, 'POST', lessonId)
}

export function getAllCourses(filter) {
  return sendRequest(`${BASE_URL}/`, 'POST', filter)
}

export function updateCourse(courseId, editInfo) {
    return sendRequest(`${BASE_URL}/${courseId}/update`, 'PUT', editInfo)
}
// // Add an item to the cart
// export function addLessontToCourse(itemId) {
//   // Just send itemId for best security (no pricing)
//   return sendRequest(`${BASE_URL}/cart/items/${itemId}`, 'POST');
// }

// // Update the item's qty in the cart
// // Will add the item to the order if not currently in the cart
// // Sending info via the data payload instead of a long URL

// // export function setItemQtyInCart(itemId, newQty) {
// //   return sendRequest(`${BASE_URL}/cart/qty`, 'PUT', { itemId, newQty });
// // }

// // Updates the order's (cart's) isPaid property to true
// export function checkout() {
//   // Changing data on the server, so make it a POST request
//   return sendRequest(`${BASE_URL}/cart/checkout`, 'POST');
// }

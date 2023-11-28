import {useState} from "react"
import React from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import {jwtDecode} from "jwt-decode"
import NavBar from "../../components/Nav/NavBar"
import CoursesIndexPage from "../CoursesIndex/CoursesIndexPage"
import CoursePage from "../CoursePage/CoursePage"
import CourseView from "../../components/CourseView/CourseView"
// import Lesson from "../../components/Lesson/LessonCard";
import CreateCoursePage from "../CreateCoursePage/CreateCoursePage"
import UserProfilePage from "../UserProfilePage/UserProfilePage"
import UserFavoritesPage from "../UserFavoritesPage/UserFavoritesPage"
import LessonViewPage from "../LessonViewPage/LessonViewPage"
import "./App.css"
import CourseEdit from "../../components/CourseEdit/CourseEdit"
/*global google*/

export const UserContext = React.createContext(null)

export default function App() {
	const [user, setUser] = useState(null)
	// const name = user ? user.name : 'Guest';
	return (
		<div className="App">
			{/* <h1>Hello {name}</h1> */}
			<UserContext.Provider value={{user: user, setUser: setUser}}>
				<NavBar user={user} setUser={setUser} />

				<Routes>
					<Route path="/" element={<Navigate to="/courses" />} />
					<Route path="/courses" element={<CoursesIndexPage />} />
					<Route path="/courses/test" element={<CoursePage />} />
					<Route path="/:courseId/view" element={<CourseView />} />
					<Route path="/:courseId" element={<CoursePage />} />
					<Route path="/courses/:id/view" element={<LessonViewPage />} />
					<Route path="/courses/create" element={<CreateCoursePage />} />

					<Route path="/lessons/:id" element={<LessonViewPage />} />
					{user && (
						<>
							<Route
								path="/user"
								element={<UserProfilePage user={user} setUser={setUser} />}
							/>
							<Route path="/user/favorites" element={<UserFavoritesPage />} />
						</>
					)}
				</Routes>
			</UserContext.Provider>
		</div>
	)
}

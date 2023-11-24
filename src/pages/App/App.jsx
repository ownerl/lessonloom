import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import NavBar from "../../components/Nav/NavBar";
import CoursesIndexPage from "../CoursesIndex/CoursesIndexPage";
import CoursePage from "../CoursePage/CoursePage";
// import Lesson from "../../components/Lesson/LessonCard";
import CreateCoursePage from "../CreateCoursePage/CreateCoursePage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import UserFavoritesPage from "../UserFavoritesPage/UserFavoritesPage";
import './App.css'
import CourseEdit from "../../components/CourseEdit/CourseEdit";
/*global google*/

export default function App() {
    const [user, setUser] = useState(null);
    // const name = user ? user.name : 'Guest';
    return (
        <div className="App">
            {/* <h1>Hello {name}</h1> */}
            <NavBar user={user} setUser={setUser} />
            
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/courses" />}
                            />
                            <Route
                                path="/courses"
                                element={<CoursesIndexPage />}
                            />
                            <Route
                                path="/courses/test"
                                element={<CoursePage />}
                            />
                            <Route
                                path="/:courseId"
                                element={<CoursePage />}
                            />
                            {/* <Route
                                path="/courses/:id/:id"
                                element={<Lesson />}
                                /> */}
                            <Route
                                path="/courses/create"
                                element={<CreateCoursePage />}
                            />
                            { user && (
                                <>
                                    <Route path="/user" element={<UserProfilePage user={user} setUser={setUser} />} />
                                    <Route
                                    path="/user/favorites"
                                    element={<UserFavoritesPage />}
                                    />
                                </>
                            )}
                        </Routes>
        </div>
    );
}

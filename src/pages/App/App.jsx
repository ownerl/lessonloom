import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import NavBar from "../../components/Nav/NavBar";
import CoursesIndexPage from "../CoursesIndex/CoursesIndexPage";
import CoursePage from "../CoursePage/CoursePage";
import LessonPage from "../LessonPage/LessonPage";
import CreateCoursePage from "../CreateCoursePage/CreateCoursePage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import UserFavoritesPage from "../UserFavoritesPage/UserFavoritesPage";
import './App.css'
/*global google*/

export default function App() {
    const [user, setUser] = useState(null);
    // const name = user ? user.name : 'Guest';
    return (
        <div className="App">
            {/* <h1>Hello {name}</h1> */}
            <NavBar user={user} setUser={setUser} />
            {
                user ? (
                    <>
                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/courses" />}
                            />
                            <Route
                                path="/courses"
                                element={<CoursesIndexPage />}
                            />
                            <Route path="/user" element={<UserProfilePage user={user} setUser={setUser} />} />
                            <Route
                                path="/user/favorites"
                                element={<UserFavoritesPage />}
                            />

                            <Route
                                path="/courses/:id"
                                element={<CoursePage />}
                            />
                            <Route
                                path="/courses/:id/:id"
                                element={<LessonPage />}
                                />
                            <Route
                                path="/courses/create"
                                element={<CreateCoursePage />}
                            />
                        </Routes>
                    </>
                ) : (
                    <>
                        
                    <h1>Please log in yo!</h1>
                        
                    </>
                )
                // <AuthPage setUser={setUser}/>
            }
        </div>
    );
}

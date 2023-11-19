import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/Nav/NavBar';
import AuthPage from '../Auth/AuthPage';
import CoursesIndexPage from '../CoursesIndex/CoursesIndexPage';
import CoursePage from '../CoursePage/CoursePage'
import LessonPage from '../LessonPage/LessonPage'
import CreateCoursePage from '../CreateCoursePage/CreateCoursePage';
import UserProfilePage from '../UserProfilePage/UserProfilePage'
import UserFavoritesPage from '../UserFavoritesPage/UserFavoritesPage';
/*global google*/

export default function App() {
    const [user, setUser] = useState(null);
    const google = window.google;
    function handleCallbackResponse(response) {
        console.log("encoded jwt id token: ", response.credential);
    }

    useEffect(() => {
        // global google object coming from script tag in public index html
        console.log('google client id: ',process.env.REACT_APP_GOOGLE_CLIENT_ID)
        google.accounts.id.initialize({
            client_Id: "522192420042-ngqg9c7p78g97b1nv8lffoud4ikee7ms.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }  // customization attributes
        );
    }, [])

    return (
        <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path='/' element={<Navigate to="/courses" />} />
            <Route path="/courses" element={ <CoursesIndexPage />}/>
            <Route path="/user" element={ <UserProfilePage /> }/>
            <Route path="/user/favorites" element={ <UserFavoritesPage /> }/>
            <Route path="/courses/create" element={ <CreateCoursePage /> }/>

            <Route path="/courses/:id" element={ <CoursePage /> }/>
            <Route path="/courses/:id/:id" element={ <LessonPage /> }/>
          </Routes>
        </>
        :
        <>
        <h2>{process.env.REACT_APP_GOOGLE_CLIENT_ID}</h2>
        <div id="signInDiv"></div>
        </>
        // <AuthPage setUser={setUser}/>
    }
    </main>
  );
}

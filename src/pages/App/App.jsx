import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../components/Nav/NavBar';
import AuthPage from '../Auth/AuthPage';
import CoursesIndexPage from '../CoursesIndex/CoursesIndexPage';
import CoursePage from '../CoursePage/CoursePage'
import LessonPage from '../LessonPage/LessonPage'
import CreateCoursePage from '../CreateCoursePage/CreateCoursePage';
import UserProfilePage from '../UserProfilePage/UserProfilePage'
import UserFavoritesPage from '../UserFavoritesPage/UserFavoritesPage';

export default function App() {
    const [user, setUser] = useState(getUser());
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
        <AuthPage setUser={setUser}/>
    }
    </main>
  );
}

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NavBar from '../../Nav/NavBar';
import AuthPage from '../Auth/AuthPage';
import CoursesIndexPage from '../CoursesIndex/CoursesIndexPage';
import CoursePage from '../CoursePage/CoursePage'
import LessonPage from '../LessonPage/LessonPage'


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/courses" element={ <CoursesIndexPage />}/>
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
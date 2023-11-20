import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import { useState } from 'react';
import "./NavBar.css";

export default function NavBar({user, setUser}) {
    const [ showNav, setShowNav ] = useState(false)
    return (
        <nav>
            <>
                <Link to="/courses">All Courses</Link>
                &nbsp; | &nbsp;
                <Link to="/courses/create">Create a Course</Link>
                &nbsp; | &nbsp;
                <Link to="/user/favorites">My Favorites</Link>
                &nbsp; | &nbsp;
                <Link to="/user">My Profile</Link>
                &nbsp; | &nbsp;
                <Login showNav={showNav} setShowNav={setShowNav} use={user} setUser={setUser}/>
            </>
        </nav>
    )
}
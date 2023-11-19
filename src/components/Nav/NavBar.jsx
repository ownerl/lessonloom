import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {


    return (
        <nav>
            <Link to="/courses">All Courses</Link>
            &nbsp; | &nbsp;
            <Link to="/courses/create">Create a Course</Link>
            &nbsp; | &nbsp;
            <Link to="/user/favorites">My Favorites</Link>
            &nbsp; | &nbsp;
            <Link to="/user">My Profile</Link>
            &nbsp; | &nbsp;


        </nav>
    )
}
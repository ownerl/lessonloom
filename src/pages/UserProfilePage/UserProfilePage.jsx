import './UserProfilePage.css'
import { useState } from 'react'
import MyCourse from '../../components/MyCourse/MyCourse'
import Course from '../../components/Course/Course'


export default function UserProfilePage({user}) {

    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className="user-container">
            <div className="photo-container">
            <img className="profile-photo" src={user.picture} alt='profile-pic'referrerpolicy="no-referrer"/>
            </div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <div className='profile-categories'>
                <div className='profile-cat' onClick={() => updateToggle(1)}>My Courses</div>
                <div className='profile-cat' onClick={() => updateToggle(2)}>Favourites</div>
                <div className='profile-cat' onClick={() => updateToggle(3)}>In Progress</div>
                <div className='profile-cat' onClick={() => updateToggle(4)}>Completed</div>
            </div>
            <div className={toggle === 1 ? "show-content" : "content"}>
            <div className="profile-course-grid">
                <MyCourse />
                <MyCourse />
                <MyCourse />
                <MyCourse />
                <MyCourse />
                <MyCourse />
                <MyCourse />
                <MyCourse />
            </div>
            </div>
            <div className={toggle === 2 ? "show-content" : "content"}>
            <div className="profile-course-grid">
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
            </div>
            <div className={toggle === 3 ? "show-content" : "content"}>
            <div className="profile-course-grid">
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
            </div>
            <div className={toggle === 4 ? "show-content" : "content"}>
            <div className="profile-course-grid">
                <Course />
                <Course />
                <Course />
                <Course />
            </div>
            </div>
        </div>
    )
}
import "./UserProfilePage.css";
import { useEffect, useState } from "react";
import MyCourse from "../../components/MyCourse/MyCourse";
import CourseCard from "../../components/CourseCard/CourseCard";
import { coursesArray } from "../../utilities/users-api";

export default function UserProfilePage({ user }) {
    const [toggle, setToggle] = useState(1);
    const [savedCourses, setSavedCourses] = useState([]);
    const [createdCourses, setCreatedCourses] = useState([]);

    useEffect(() => {
        const fetchUserCourses = async () => {
            await coursesArray({ filter: "savedCourses" }, user).then(
                (data) => {
                    setSavedCourses(data);
                }
            );
            fetchUserCourses();
        };
    }, []);
    
    useEffect(() => {
        const fetchUserCourses = async () => {
            await coursesArray({ filter: "createdCourses" }, user).then(
                (data) => {
                    setCreatedCourses(data);
                }
            );
            fetchUserCourses();
        };
    }, []);

    function updateToggle(id) {
        setToggle(id);
    }

    return (
        <div className="user-container">
            <div className="photo-container">
                <img
                    className="profile-photo"
                    src={user.picture}
                    alt="profile-pic"
                    referrerpolicy="no-referrer"
                />
            </div>
            <h3>{user.name}</h3>
            <h3>{user.email}</h3>
            <div className="profile-categories">
                <div className="profile-cat" onClick={() => updateToggle(1)}>
                    My Courses
                </div>
                <div className="profile-cat" onClick={() => updateToggle(2)}>
                    Favourites
                </div>
                <div className="profile-cat" onClick={() => updateToggle(3)}>
                    In Progress
                </div>
                <div className="profile-cat" onClick={() => updateToggle(4)}>
                    Completed
                </div>
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
                    <h1>TEST{createdCourses[0]}</h1>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
            <div className={toggle === 3 ? "show-content" : "content"}>
                <div className="profile-course-grid">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
            <div className={toggle === 4 ? "show-content" : "content"}>
                <div className="profile-course-grid">
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div>
        </div>
    );
}

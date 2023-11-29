import "./UserProfilePage.css";
import { useEffect, useState } from "react";
import MyCourse from "../../components/MyCourse/MyCourse";
import CourseCard from "../../components/CourseCard/CourseCard";
import { coursesArray } from "../../utilities/users-api";
import { useNavigate } from "react-router-dom";

export default function UserProfilePage({ user }) {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(1);
    const [savedCourses, setSavedCourses] = useState([]);
    const [createdCourses, setCreatedCourses] = useState([]);
    const [showCourses, setShowCourses] = useState([]);
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
                    setCreatedCourses(data.createdCourses);
                }
            );
        };
        fetchUserCourses();
    }, []);

    useEffect(() => {
        console.log('createdcourses: ', createdCourses)
        if (createdCourses.length > 1) {
            const test = createdCourses.map((courseObject) => (
                <div
                    key={courseObject._id}
                    className="course"
                    onClick={() => {
                        handleClick(courseObject._id);
                    }}
                >
                    {/* <div className="top">{courseObject.bannerImage}</div> */}
                    <div className="top">
                        <img
                            src={courseObject.bannerImage}
                            alt="course-banner"
                        />
                    </div>
                    <div className="bottom">
                        <div className="left">{courseObject.title}</div>
                        <div className="right"></div>
                    </div>
                </div>
            ));
            console.log('test: ', test)
            setShowCourses(test);
        }
    }, [createdCourses]);

    function handleClick(id) {
        const courseNav = { courseId: id };
        navigate(`/${id}/view`, { state: courseNav });
    }

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
            <div className="user-info">
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
            </div>
            {/* <div className="profile-categories">
                <div className="profile-cat" onClick={() => updateToggle(1)}>
                    My Courses
                </div>
                <div className="profile-cat" onClick={() => updateToggle(2)}>
                    Favourites
                </div>
            </div> */}
            {/* <div className={toggle === 1 ? "show-content" : "content"}>
                <div className="profile-course-grid">
                    {showCourses}
                </div>
            </div> */}
            <div>
                <div className="profile-course-grid">
                    {showCourses}
                </div>
            </div>
            {/* <div className={toggle === 2 ? "show-content" : "content"}>
                <div className="profile-course-grid">
                    <h1>TEST{createdCourses[0]}</h1>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </div> */}
            {/* <div className={toggle === 3 ? "show-content" : "content"}>
            <div className="profile-course-grid">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            </div> */}
            {/* <div className={toggle === 4 ? "show-content" : "content"}>
            <div className="profile-course-grid">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
            </div> */}
        </div>
    );
}

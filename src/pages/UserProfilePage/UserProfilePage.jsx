import "./UserProfilePage.css";
import { useEffect, useState } from "react";
import { coursesArray } from "../../utilities/users-api";
import { useNavigate } from "react-router-dom";

export default function UserProfilePage({ user }) {
    const navigate = useNavigate();
    //// const [savedCourses, setSavedCourses] = useState([]);
    const [createdCourses, setCreatedCourses] = useState([]);
    const [showCourses, setShowCourses] = useState([]);

    // Future Implementation of Saving Courses
    // // useEffect(() => {
    // //     const fetchUserCourses = async () => {
    // //         await coursesArray({ filter: "savedCourses" }, user).then(
    // //             (data) => {
    // //                 setSavedCourses(data);
    // //             }
    // //         );
    // //         fetchUserCourses();
    // //     };
    // // }, []);

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
        if (createdCourses.length > 1) {
            const test = createdCourses.map((courseObject) => (
                <div
                    key={courseObject._id}
                    className="course"
                    onClick={() => {
                        handleClick(courseObject._id);
                    }}
                >
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
            setShowCourses(test);
        }
    }, [createdCourses]);

    function handleClick(id) {
        const courseNav = { courseId: id };
        navigate(`/${id}/view`, { state: courseNav });
    }

    return (
        <div className="user-container">
            <div className="photo-container">
                <img
                    className="profile-photo"
                    src={user.picture}
                    alt="profile-pic"
                    referrerPolicy="no-referrer"
                />
            </div>
            <div className="user-info">
                <h3>{user.name}</h3>
                <h3>{user.email}</h3>
            </div>
            <div>
                <div className="profile-course-grid">{showCourses}</div>
            </div>
        </div>
    );
}

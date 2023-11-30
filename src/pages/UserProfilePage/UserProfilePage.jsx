import "./UserProfilePage.css";
import { useEffect, useState } from "react";
import { coursesArray } from "../../utilities/users-api";
import { useNavigate } from "react-router-dom";

export default function UserProfilePage({ user }) {
    const navigate = useNavigate();
    //// const [savedCourses, setSavedCourses] = useState([]);
    const [createdCourses, setCreatedCourses] = useState([]);
    const [showCourses, setShowCourses] = useState([]);
    const icons = {
        Programming: "/programming-icon.svg",
        "Cooking & Nutrition": "/cooking-icon.svg",
        Math: "/math-icon.svg",
        Art: "/art-icon.svg",
        Language: "/business-icon.svg",
        "Business & Marketing": "/fitness-icon.svg",
        "Health & Fitness": "/language-icon.svg",
        DIY: "/img/diy-icon.svg",
        Other: "/img/other-icon.svg",
    };
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
        let courseList = [];
        try {
            coursesArray({ filter: "createdCourses" }, user).then((data) => {
                data.createdCourses.forEach((courseInfo) => {
                    courseList.push(courseInfo);
                });
                const test = courseList.map((courseObject) => (
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
                            <div className="right">
                                <div className="image-container">
                                    <img
                                        src={`${
                                            icons[courseObject.categories[0]]
                                        }`}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ));
                setShowCourses(test);
            });
        } catch (err) {
            console.log(
                "Error occured while fetching user created courses",
                err
            );
        }
    }, []);

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

import "./CourseView.css";
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../pages/App/App";
import LessonList from "../LessonList/LessonList";
import * as course from "../../utilities/courses-api";

export default function CourseView() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const location = useLocation();
    const [courseInfo, setCourseInfo] = useState({
        _id: null,
        title: "",
        description: "",
        bannerImage: null,
        lessons: [],
        categories: [],
    });

    useEffect(() => {
        const fetchCourse = async () => {
            await course.getCourse(location.state.courseId).then((data) => {
                setCourseInfo(data);
            });
        };
        fetchCourse();
    }, []);

    function handleEdit() {
        navigate(`/${courseInfo._id}`, { state: courseInfo });
    }

    return (
        <div className="coursepage-container">
            <>
                <div className="course-page-intro">
                    <div className="course-split">
                        <div className="split-left">
                            <h1>{courseInfo ? courseInfo.title : ""}</h1>
                            <p>{courseInfo ? courseInfo.description : ""}</p>
                        </div>
                        <div className="split-right">
                            <img
                                src={courseInfo ? courseInfo.bannerImage : null}
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="intro-title">
                    {user && <button className="edit" onClick={handleEdit}>Edit</button>}
                    </div>
                </div>
                <LessonList
                    courseLessons={courseInfo ? courseInfo.lessons : null}
                    courseInfo={courseInfo}
                />
            </>
        </div>
    );
}

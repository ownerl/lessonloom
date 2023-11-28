import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CourseView.css";
import Button from "../Button/Button";
import LessonSetUp from "../LessonSetUp/LessonSetUp";
import LessonList from "../LessonList/LessonList";
import * as course from "../../utilities/courses-api";

export default function CourseView() {
    const location = useLocation();
    const [courseInfo, setCourseInfo] = useState({
        _id: null,
        title: "",
        description: "",
        bannerImage: null,
    });
    const [courseView, setCourseView] = useState();

    useEffect(() => {
        const fetchCourse = async () => {
            await course.getCourse(location.state.courseId).then((data) => {
                setCourseInfo(data);
                console.log("location state! ", location.state);
                console.log("course info! ", data);
                console.log(
                    "course info! ",
                    data.title,
                    data.description,
                    data.bannerImage
                );
            });
        };
        fetchCourse();
    }, []);

    useEffect(() => {
        setCourseView(() => {
            return (
                <>
                    <div className="course-page-intro">
                        <div className="intro-title">
                            <h1>{courseInfo ? courseInfo.title : ""}</h1>
                            <h3>95%</h3>
                        </div>
                        <p>{courseInfo ? courseInfo.description : ""}</p>
                        <img
                            src={courseInfo ? courseInfo.bannerImage : null}
                            alt=""
                        />
                    </div>
                    <LessonList courseId={courseInfo ? courseInfo._id : null} />
                </>
            );
        });
    }, [courseInfo]);

    return <div className="coursepage-container">{courseView}</div>;
}

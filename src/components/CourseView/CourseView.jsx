import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CourseView.css";
import Button from "../Button/Button";
import LessonSetUp from "../LessonSetUp/LessonSetUp";
import LessonList from "../LessonList/LessonList";
import * as course from "../../utilities/courses-api";


export default function CourseView() {
    const courseInfo = course.getCourse(courseId)
    const [addLessonVisible, setAddLessonVisible] = useState(true);
    const [resetKey, setResetKey] = useState(0);

    return (
        <div className="coursepage-container">
            <div className="course-page-intro">
                <div className="intro-title">
                    <h1>{courseInfo ? courseInfo.title : ''}</h1>
                    <h3>85%</h3>
                </div>
                <p>{courseInfo ? courseInfo.description : ''}</p>
                <img src={courseInfo ? courseInfo.bannerImage : null} alt="" />
            </div>
            <LessonList key={resetKey} courseId={courseInfo ? courseInfo._id : null} />
            <Button
                addLessonVisible={addLessonVisible}
                setAddLessonVisible={setAddLessonVisible}
            />
            {!addLessonVisible && (
                <LessonSetUp
                    courseId={courseInfo ? courseInfo._id : null}
                    addLessonVisible={addLessonVisible}
                    setAddLessonVisible={setAddLessonVisible}
                    resetKey={resetKey}
                    setResetKey={setResetKey}
                />
            )}
        </div>
    );
}

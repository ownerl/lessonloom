import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CoursePage.css";
import Button from "../../components/Button/Button";
import LessonSetUp from "../../components/LessonSetUp/LessonSetUp";
import LessonList from "../../components/LessonList/LessonList";
import * as course from "../../utilities/courses-api";
import back from "../../img/gallery 1.png";


export default function CoursePage() {
    const navigate = useNavigate();
    const [addLessonVisible, setAddLessonVisible] = useState(true);
    const location = useLocation();
    const [resetKey, setResetKey] = useState(0);
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
            console.log('course info in useffect: ',location.state)
            await course.getCourse(location.state._id).then((data) => {
                setCourseInfo(data);
                console.log("location state! ", location.state);
                console.log("course info! ", data);
                console.log(
                    "course info! Now with Lessons! ",
                    data.title,
                    data.description,
                    data.lessons,
                );
            });
        };
        fetchCourse();
    }, [resetKey]);


    function handleBack() {
        const courseNav = {courseId: courseInfo._id}
        navigate(`/${courseInfo._id}/view`, { state: courseNav });
    }

    return (
        <div className="coursepage-container">
            <div className="course-page-intro">
                <div className="intro-title">
                    <h1>{courseInfo ? courseInfo.title : ''}</h1>
                    <h3>85%</h3>
                </div>
                <p>{courseInfo ? courseInfo.description : ''}</p>
                <img src={courseInfo ? courseInfo.bannerImage : null} alt="" />
                <img className="backImg" onClick={handleBack} src={back} alt="favourite button" />
            </div>
            <LessonList key={resetKey} courseLessons={courseInfo ? courseInfo.lessons : null} />
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

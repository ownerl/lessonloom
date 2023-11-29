import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CourseView.css";
import edit from "../../img/edit.svg";
import LessonList from "../LessonList/LessonList";
import * as course from "../../utilities/courses-api";
import { UserContext } from "../../pages/App/App";

export default function CourseView() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
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
            await course.getCourse(location.state.courseId).then((data) => {
                setCourseInfo(data);
                console.log("location state! ", location.state);
                console.log("course info! ", data);
                console.log(
                    "course info! Now with Lessons! ",
                    data.title,
                    data.description,
                    data.lessons
                );
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
                        {/* <h3>95%</h3> */}
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
                    {/* {user && <img className="edit" onClick={handleEdit} src={edit} alt="favourite button" />} */}
                    {user && <button onClick={handleEdit}>Edit</button>}
                    </div>
                    
                </div>


                <LessonList
                    courseLessons={courseInfo ? courseInfo.lessons : null}
                />
            </>
        </div>
    );
}


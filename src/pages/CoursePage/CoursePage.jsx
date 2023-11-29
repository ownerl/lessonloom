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
    const [edit, setEdit] = useState(false);
    const [courseInfo, setCourseInfo] = useState({
        _id: null,
        title: "",
        description: "",
        bannerImage: null,
        lessons: [],
        categories: [],
    });
    const [editInfo, setEditInfo] = useState({
        title: "",
        description: "",
        bannerImage: "",
    });

    useEffect(() => {
        const fetchCourse = async () => {
            console.log("course info in useffect: ", location.state);
            await course.getCourse(location.state._id).then((data) => {
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
    }, [resetKey]);

    useEffect(() => {
        setEditInfo({
            title: courseInfo.title,
            description: courseInfo.description,
            bannerImage: courseInfo.bannerImage,
        });
    }, [courseInfo, edit])

    function handleBack() {
        const courseNav = { courseId: courseInfo._id };
        navigate(`/${courseInfo._id}/view`, { state: courseNav });
    }

    function handleChange(evt) {
        setEditInfo({ ...editInfo, [evt.target.name]: evt.target.value });
        console.log(evt.target.name);
        console.log(evt.target.value);
    }

    function handleEdit() {
        setEdit(edit ? false : true);
    }

    async function handleSave() {
        const courseId = location.state._id
        console.log('edit info: ', editInfo)
        await course.updateCourse(courseId, editInfo)
        setEdit(false)
        navigate(0)
    }

    return (
        <div className="coursepage-container">
            {/* <div className="course-page-intro">
                <div className="intro-title">
                    <h1>{courseInfo ? courseInfo.title : ""}</h1>
                    <h3>85%</h3>
                </div>
                <p>{courseInfo ? courseInfo.description : ""}</p>
                <img src={courseInfo ? courseInfo.bannerImage : null} alt="" />
                <img
                    className="backImg"
                    onClick={handleBack}
                    src={back}
                    alt="favourite button"
                />
            </div> */}
            {edit ? (
                <div className="course-page-intro">
                    <div className="course-split">
                        <div className="split-left">
                        <input
                            placeholder="Course Title"
                            type="text"
                            name="title"
                            value={editInfo.title}
                            onChange={handleChange}
                            required
                        />
                    <textarea
                        placeholder="Course Description"
                        type="text"
                        name="description"
                        value={editInfo.description}
                        onChange={handleChange}
                        required
                    />
                        </div>
                        <div className="split-right">
                        <img
                        src={courseInfo ? courseInfo.bannerImage : null}
                        alt=""
                    />
                        </div>
                    </div>

                    <div className="intro-title">
                    {/* <img
                        className="backImg"
                        onClick={handleBack}
                        src={back}
                        alt="favourite button"
                    /> */}
                    <button onClick={handleBack}>Back</button>
                        <button onClick={handleEdit}>Close</button>
                        <button onClick={handleSave}>Save</button>
                    </div>
                </div>
            ) : (
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
                    {/* <img
                        className="backImg"
                        onClick={handleBack}
                        src={back}
                        alt="favourite button"
                    /> */}
                    <button onClick={handleBack}>Back</button>
                    <button onClick={handleEdit}>Edit</button>
                    </div>
                </div>
            )}
            <LessonList
                key={resetKey}
                courseInfo={courseInfo ? courseInfo : null}
            />
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

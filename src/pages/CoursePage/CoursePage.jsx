import "./CoursePage.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import LessonSetUp from "../../components/LessonSetUp/LessonSetUp";
import LessonList from "../../components/LessonList/LessonList";
import * as course from "../../utilities/courses-api";

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
    }

    function handleEdit() {
        setEdit(edit ? false : true);
    }

    async function handleSave() {
        const courseId = location.state._id
        await course.updateCourse(courseId, editInfo)
        setEdit(false)
        navigate(0)
    }

    return (
        <div className="coursepage-container">
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
                    <button className="back" onClick={handleBack}>Back</button>
                        <button className="close" onClick={handleEdit}>Close</button>
                        <button className="save" onClick={handleSave}>Save</button>
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
                    <button className="back" onClick={handleBack}>Back</button>
                    <button className="edit" onClick={handleEdit}>Edit</button>
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

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as course from "../../utilities/courses-api";
import './CreateCoursePage.css'
import CourseSetUp from '../../components/CourseSetUp/CourseSetUp'
import LessonList from '../../components/LessonList/LessonList'
import LessonSetUp from '../../components/LessonSetUp/LessonSetUp'
import Button from '../../components/Button/Button'

// testing navigate to edit
import CourseEdit from "../../components/CourseEdit/CourseEdit";

export default function CreateCoursePage() {
    const navigate = useNavigate();

    const [file, setFile] = useState();
    function handleImageChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const [courseInfo, setCourseInfo] = useState({
        title: "",
        description: "",
        bannerImage: "",
    });


    const [error, setError] = useState("");

    function handleChange(evt) {
        setCourseInfo({ ...courseInfo, [evt.target.name]: evt.target.value });
        setError("");
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const newCourseInfo = await course.createCourse(courseInfo)
            console.log('new course info returned from controller: ', newCourseInfo._id)
            navigate(`/${newCourseInfo._id}`, { state: newCourseInfo });
        } catch {
            setError('Failed To Create Course')
        }
    }
    return (
        <main>
            <div className="container">
                <CourseSetUp />
                <LessonList />
                <Button />
                <LessonSetUp />
                <div className="test">
                <h1>TESTING: adding course to database here</h1>
            <br />

            <div className="form-container">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={courseInfo.title}
                        onChange={handleChange}
                        required
                    />
                    <label>Description</label>
                    <input
                        type="description"
                        name="description"
                        value={courseInfo.description}
                        onChange={handleChange}
                        required
                    />

                    {/* <div className="trial">
                        <input type="file" onChange={handleImageChange} />
                        <img src={file} alt='file'/>
                    </div> */}

                    <button type="submit">Create Course</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
                </div>
            </div>
        </main>
    );
}

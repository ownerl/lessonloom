import { useRef, useState, useEffect } from "react";
import * as course from "../../utilities/courses-api";
import './CreateCoursePage.css'
import CourseSetUp from '../../components/CourseSetUp/CourseSetUp'
import LessonList from '../../components/LessonList/LessonList'
import LessonSetUp from '../../components/LessonSetUp/LessonSetUp'
import Button from '../../components/Button/Button'

export default function CreateCoursePage() {

    

    
    const [file, setFile] = useState(null);
    
    useEffect(()=> {
        console.log(file, 'this is the file')
    }, [file])

    function handleImageChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const [courseInfo, setCourseInfo] = useState({
        title: "",
        description: "",
        bannerImage: file,
    });


    const [error, setError] = useState("");



    function handleChange(evt) {
        setCourseInfo({ ...courseInfo, [evt.target.name]: evt.target.value });
        setError("");
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            course.createCourse(courseInfo)
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
                        type="text"
                        name="description"
                        value={courseInfo.description}
                        onChange={handleChange}
                        required
                    />

                    <div className="trial">
                        <input 
                        type="file" 
                        name="bannerImage" 
                        value={courseInfo.bannerImage} 
                        onChange={handleImageChange}  />
                        <img src={file} alt='file'/>
                    </div>

                    <button type="submit">Create Course</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
                </div>
            </div>
        </main>
    );
}

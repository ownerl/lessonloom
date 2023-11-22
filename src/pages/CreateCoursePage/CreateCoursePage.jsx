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
    
    // const [file, setFile] = useState('');
    const [postImage, setPostImage] = useState("")
    
    useEffect(()=> {
        console.log(typeof(postImage), 'this is the file')
    }, [postImage])

    const navigate = useNavigate();



    const [courseInfo, setCourseInfo] = useState({
        title: "",
        description: "",
        bannerImage: "",
    });


    const [error, setError] = useState("");

    async function handleImageChange(e) {
        const file = e.target.files[0]
        console.log(file);
        const base64 = await convertToBase64(file)
        console.log(base64)
        setPostImage(base64)
        setCourseInfo({ ...courseInfo, [e.target.name]: 'hello' });
        setError("");
        console.log(e.target.name)
        // setFile(base64)
        // setFile(URL.createObjectURL(e.target.files[0]));
    }

    function convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }



    function handleChange(evt) {
        setCourseInfo({ ...courseInfo, bannerImage:postImage, [evt.target.name]: evt.target.value });
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
                    {/* <div className="trial">
                        <input type="file" onChange={handleImageChange} />
                        <img src={file} alt='file'/>
                     */}</div>

                    <button type="submit">Create Course</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
                </div>
            </div>
        </main>
    );
}

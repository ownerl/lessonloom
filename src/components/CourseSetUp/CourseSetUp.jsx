import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as course from "../../utilities/courses-api";
import './CourseSetUp.css'
import photoUpload from '../../img/gallery 1.png'

export default function CourseSetUp() {

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
  setCourseInfo({ ...courseInfo, [e.target.name]: base64 });
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
    <form className="courseSetUp" action="" autoComplete="off" onSubmit={handleSubmit}>
    <div className="top-row">
        <div className="title">
          <input 
          placeholder="Course Title"
          type="text"
          name="title"
          value={courseInfo.title}
          onChange={handleChange}
          required/>
        </div>
        <div className="photo-upload">
          {/* Course Photo<img src={photoUpload} alt="upload" />  */}
          <input 
          type="file" 
          name="bannerImage" 
          onChange={handleImageChange}  />
        </div>
    </div>
    <div className="middle-row">
      <input 
      placeholder="Description"
      type="text"
      name="description"
      value={courseInfo.description}
      onChange={handleChange}
      required
      />
    </div>
    <div className="bottom-row">
      <h3>Choose up to 3 categories</h3>
      <div className="categories">
                <div className="cat">Photography</div>
                <div className="cat">JavaScript</div>
                <div className="cat">Nutrition</div>
                <div className="cat">Physics</div>
                <div className="cat">Painting</div>
                <div className="cat">AI</div>
                <div className="cat">Busienss</div>
                <div className="cat">Yoga</div>
                <div className="cat">Cooking</div>
                <div className="cat">Marketing</div>
            </div>
    </div>
    <button type="submit">Create Course</button>
    <p className="error-message">&nbsp;{error}</p>
</form>
  )
}
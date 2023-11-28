import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as course from "../../utilities/courses-api";
import { createdCourses } from "../../utilities/users-api";
import './CourseSetUp.css'
import photoUpload from '../../img/gallery 1.png'
import Select from 'react-select'
import Gallery from '../../img/gallery 1.png'
import { UserContext } from "../../pages/App/App";


export default function CourseSetUp() {
  const { user } = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'Photography', label: 'Photography' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Nutrition', label: 'Nutrition' },
    { value: 'Physics', label: 'Physics' },
    { value: 'Painting', label: 'Painting' },
    { value: 'AI', label: 'AI' },
    { value: 'Business', label: 'Business' },
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Cooking', label: 'Cooking' },
    { value: 'marketing', label: 'marketing' }
  ]

  const [postImage, setPostImage] = useState("")

  useEffect(()=> {
    console.log(typeof(postImage), 'this is the file')
  }, [postImage])

  const navigate = useNavigate();

  const [courseInfo, setCourseInfo] = useState({
    title: "",
    description: "",
    bannerImage: "",
    categories: "",
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

async function handleCatChange(e) {
  setCourseInfo({ ...courseInfo, 'categories': e.value });
  console.log(e.value)
  console.log(courseInfo)
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
  console.log(evt.target.name)
  console.log(evt.target.value)
}

async function handleSubmit(evt) {
  evt.preventDefault();
  try {
      const newCourseInfo = await course.createCourse(courseInfo, user);
      await createdCourses(courseInfo, user);
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
          <img src={Gallery} alt="choose" />
          <input 
          type="file" 
          name="bannerImage" 
          onChange={handleImageChange}
          required
          />
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
      <h3>Choose a Category</h3>
      <Select 
      options={options} 
      // name="categories" 
      required
      defaultValue={selectedOption}
      onChange={handleCatChange}
      // value={courseInfo.categories}
      // onChange={(evt) => {setCourseInfo({ ...courseInfo, categories: evt.target.value });}}
      />
    </div>
    <div className="button-row">
    <button type="submit">Create Course</button>
    <p className="error-message">&nbsp;{error}</p>
    </div>
</form>
  )
}
import './CourseEdit.css'
import { useLocation } from 'react-router-dom';
import photoUpload from '../../img/gallery 1.png'
import { useEffect, useState } from 'react'
import * as course from "../../utilities/courses-api";

export default function CourseEdit() {
  const location = useLocation();
  const courseInfo = location.state;
  console.log(' course info :  ', location.state)
  // dont actually need the bottom line cuz useLocation with previous navigate brings course info returned from DB on creation here to this jsx
  // const [courseInfo, setCourseInfo] = useState(course.getCourse(courseId))

  return (
    <form className="courseSetUp" action="">
    <div className="top-row">
        <div className="title">
          <h4>{courseInfo.title}</h4>
        </div>
        <div className="photo-upload">
          Course Photo<img src={photoUpload} alt="upload" /> 
        </div>
    </div>
    <div className="middle-row">
      <h4>{courseInfo.description}</h4>
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
</form>
  )
}
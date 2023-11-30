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
                <div className="cat">Programming</div>
                <div className="cat">Cooking & Nutrition</div>
                <div className="cat">Math</div>
                <div className="cat">Art</div>
                <div className="cat">Business & Marketing</div>
                <div className="cat">Health & Fitness</div>
                <div className="cat">Language</div>
                <div className="cat">DIY</div>
                <div className="cat">Other</div>
            </div>
    </div>
</form>
  )
}
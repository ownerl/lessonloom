import './Categories.css'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import heart from '../../img/Vector.svg'
import * as course from '../../utilities/courses-api';

export default function CatOne({ category }) {

  const navigate = useNavigate();

  const [filter, setFilter] = useState({categories: {$in: [`${category}`]}})

  const [showCourses, setShowCourses] = useState()


  function handleClick(id) {
    const courseNav = {courseId: id}
    navigate(`/${id}/view`, { state: courseNav });
}

  useEffect(() => {
    let courseList = [];
    course.getAllCourses(filter).then((data) => {
      data.forEach((courseInfo) => {
        courseList.push(courseInfo);
      });
      const test = courseList.map((courseObject) => (
      <div key={courseObject._id} className='course' onClick={() => {handleClick(courseObject._id)}}>
      {/* <div className="top">{courseObject.bannerImage}</div> */}
      <div className="top"><img src={courseObject.bannerImage} alt="course-banner" /></div>
      <div className="bottom">
      <div className="left">{courseObject.title}</div>
      <div className="right"><img src={heart} alt ="favourite button"/></div>
      </div>
      </div>
      ));
  
      setShowCourses(test);
    });
  }, []);

  return(
    <>
      <h1>{category}</h1>
      <div className="course-grid">
      {showCourses}
      </div>
    </>
  )
}
import './Categories.css'
import * as course from '../../utilities/courses-api';
import { useState, useEffect } from 'react';
import heart from '../../img/Vector.svg'

export default function CatAll() {

  // Using
  const [showCourses, setShowCourses] = useState()

  useEffect(() => {
    let courseList = [];
    course.getAllCourses().then((data) => {
      data.forEach((courseInfo) => {
        courseList.push(courseInfo);
      });
  
      const test = courseList.map((courseObject) => (
      <div key={courseObject._id} className='course'>
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
      <h1>All</h1>
      <div className="course-grid">
      {showCourses}
      </div>
    </>
  )
}
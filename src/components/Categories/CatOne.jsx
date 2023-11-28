import './Categories.css'
import * as course from '../../utilities/courses-api';
import { useState, useEffect } from 'react';

export default function CatOne({ category }) {

  const [courses, setCourses] = useState([])

  const [filter, setFilter] = useState({categories: {$in: [`${category}`]}})

  const [newCourseInfo, setNewCourseInfo] = useState([])

  const [showCourses, setShowCourses] = useState()

  useEffect(() => {
    let courseList = [];
  
    course.getAllCourses(filter).then((data) => {
      data.forEach((courseInfo) => {
        courseList.push(courseInfo);
      });
  
      const test = courseList.map((courseObject) => (
        <div key={courseObject._id}>{courseObject.title}</div>
      ));
  
      setShowCourses(test);
    });
  }, []);

  return(
    <div className="category-box">
      <h1>{category}</h1>
      {showCourses}
    </div>
  )
}
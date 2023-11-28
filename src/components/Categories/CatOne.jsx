import './Categories.css'
import * as course from '../../utilities/courses-api';
import { useState, useEffect } from 'react';

export default function CatOne() {

  const [courses, setCourses] = useState([])

  const [filter, setFilter] = useState({categories: {$in: ['JavaScript']}})
  

  async function CourseReveal() {
    try {
        const newCourseInfo = await course.getAllCourses(filter)
        console.log('new course info returned from controller: ', newCourseInfo)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    CourseReveal()
  }, [])

  
  // useEffect(() => {
  //   const filteredCourses = async () => {
  //   await course.getAllCourses().then((data) => {
  //     setCourses(data)
  //   })
  //   console.log(courses)
  //   } 
  // }, [])

  return(
    <div className="category-box">
      <h1>Category 1</h1>
    </div>
  )
}
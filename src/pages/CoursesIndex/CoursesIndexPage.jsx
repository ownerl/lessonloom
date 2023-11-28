import { useState, useEffect, useRef } from 'react';
import './CoursesIndexPage.css'
import Course from '../../components/Course/Course'
import CatOne from '../../components/Categories/CatOne';
import CatTwo from '../../components/Categories/CatTwo';
import CatThree from '../../components/Categories/CatThree';
import CatFour from '../../components/Categories/CatFour';
import CatFive from '../../components/Categories/CatFive';
import CatSix from '../../components/Categories/CatSix';
import CatSeven from '../../components/Categories/CatSeven';
import CatEight from '../../components/Categories/CatEight';
import CatNine from '../../components/Categories/CatNine';
import * as course from '../../utilities/courses-api';
import { Link } from 'react-router-dom';


export default function CoursesIndexPage() {
    // const filter = {}
    // const courseArr = course.getAllCourses(filter).then(data => console.log("COURSEARR: " + data))
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }
    const exampleCourseId = "6566255b05e7a75223288fef"
    return (
        <div className="container">
            <h1>TESTING SHIT</h1>
            <br />
            <Link to={`/${exampleCourseId}/view`} state={{courseId: exampleCourseId}}>EXAMPLE COURSE VIEW</Link>
            <br />

            
            <h1>Categories</h1>
            <div className="categories">
                <div className="cat" onClick={() => updateToggle(1)}>All</div>
                <div className="cat" onClick={() => updateToggle(2)}>JavaScript</div>
                <div className="cat" onClick={() => updateToggle(3)}>Nutrition</div>
                <div className="cat" onClick={() => updateToggle(4)}>Physics</div>
                <div className="cat" onClick={() => updateToggle(5)}>Painting</div>
                <div className="cat" onClick={() => updateToggle(6)}>AI</div>
                <div className="cat" onClick={() => updateToggle(7)}>Busienss</div>
                <div className="cat" onClick={() => updateToggle(8)}>Yoga</div>
                <div className="cat" onClick={() => updateToggle(9)}>Cooking</div>
                <div className="cat" onClick={() => updateToggle(10)}>Marketing</div>
            </div>

            <div className={toggle === 1 ? "show-content" : "content"}>
                <div className="other-courses" >
                    <h1>Hot Courses</h1>
                    <div className="course-grid">
                        {/* {courseArr.map(course => (
                            <Course courseInfo={course}/>
                        ))} */}
                        <Course />
                        <Course />
                        <Course />
                        <Course />
                    </div>
                    <h1>Most Popular</h1>
                    <div className="course-grid">
                        <Course />
                        <Course />
                        <Course />
                        <Course />
                    </div>
                </div>
            </div>


            <div className={toggle === 2 ? "show-content" : "content"}>
                <div className="course-grid">
                    <CatOne category='JavaScript'/>
                </div>
            </div>

            <div className={toggle === 3 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Nutrition'/>
                </div>
            </div>

            <div className={toggle === 4 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Physics'/>
                </div>
            </div>

            <div className={toggle === 5 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Painting'/>
                </div>
            </div>

            <div className={toggle === 6 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='AI'/>
                </div>
            </div>

            <div className={toggle === 7 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Business'/>
                </div>
            </div>

            <div className={toggle === 8 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Yoga'/>
                </div>
            </div>

            <div className={toggle === 9 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Cooking'/>
                </div>
            </div>

            <div className={toggle === 10 ? "show-content" : "content"}>
                <div className="course-grid">
                <CatOne category='Marketing'/>
                </div>
            </div>

        </div>
    )
}
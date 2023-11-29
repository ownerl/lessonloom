import { useState, useEffect, useRef } from 'react';
import './CoursesIndexPage.css'
import Course from '../../components/Course/Course'
import Categories from '../../components/Categories/Categories';
import CatAll from '../../components/Categories/CatAll';
import * as course from '../../utilities/courses-api';
import { Link } from 'react-router-dom';


export default function CoursesIndexPage() {
    // const filter = {}
    // const courseArr = course.getAllCourses(filter).then(data => console.log("COURSEARR: " + data))
    const [toggle, setToggle] = useState(1)

    function updateToggle(id) {
        setToggle(id)
    }
    const exampleCourseId = "65668035450b8cf4301aad7d"
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
                <CatAll />
            </div>


            <div className={toggle === 2 ? "show-content" : "content"}>
                    <Categories category='JavaScript'/>
            </div>

            <div className={toggle === 3 ? "show-content" : "content"}>
                <Categories category='Nutrition'/>
            </div>

            <div className={toggle === 4 ? "show-content" : "content"}>
                <Categories category='Physics'/>
            </div>

            <div className={toggle === 5 ? "show-content" : "content"}>
                <Categories category='Painting'/>
            </div>

            <div className={toggle === 6 ? "show-content" : "content"}>
                <Categories category='AI'/>
            </div>

            <div className={toggle === 7 ? "show-content" : "content"}>
                <Categories category='Business'/>
            </div>

            <div className={toggle === 8 ? "show-content" : "content"}>
                <Categories category='Yoga'/>
            </div>

            <div className={toggle === 9 ? "show-content" : "content"}>
                <Categories category='Cooking'/>
            </div>

            <div className={toggle === 10 ? "show-content" : "content"}>
                <Categories category='Marketing'/>
            </div>

        </div>
    )
}
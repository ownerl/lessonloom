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
    // const exampleCourseId = "65668035450b8cf4301aad7d"
    const icons = {
        programming: "../../img/programming-icon.svg",
        cooking: "../../img/cooking-icon.svg",
        math: "../../img/math-icon.svg",
        art: "../../img/art-icon.svg",
        business: "../../img/business-icon.svg",
        fitness: "../../img/fitness-icon.svg",
        language: "../../img/language-icon.svg",
        diy: "../../img/diy-icon.svg",
        other: "../../img/other-icon.svg",
    }
    return (
        <div className="container">
            {/* <h1>TESTING SHIT</h1>
            <br />
            <Link to={`/${exampleCourseId}/view`} state={{courseId: exampleCourseId}}>EXAMPLE COURSE VIEW</Link>
            <br /> */}

            
            <h1>Categories</h1>
            <div className="categories">
                <div className="cat" onClick={() => updateToggle(1)}>All</div>
                <div className="cat" onClick={() => updateToggle(2)}>Programming</div>
                <div className="cat" onClick={() => updateToggle(3)}>Cooking & Nutrition</div>
                <div className="cat" onClick={() => updateToggle(4)}>Math</div>
                <div className="cat" onClick={() => updateToggle(5)}>Art</div>
                <div className="cat" onClick={() => updateToggle(6)}>Language</div>
                <div className="cat" onClick={() => updateToggle(7)}>Business & Marketing</div>
                <div className="cat" onClick={() => updateToggle(8)}>Health & Fitness</div>
                <div className="cat" onClick={() => updateToggle(9)}>DIY</div>
                <div className="cat" onClick={() => updateToggle(10)}>Other</div>
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
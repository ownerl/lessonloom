import './CoursesIndexPage.css'
import Course from '../../components/Course/Course'

export default function CoursesIndexPage() {
    return (
        <div className="container">
            <h1>Categories</h1>
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
            <div className="other-courses">
            <h1>Hot Courses</h1>
            <div className="course-grid">
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
    )
}
import "./Categories.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as course from "../../utilities/courses-api";

export default function CatAll({icons}) {
    const navigate = useNavigate();
    const [showCourses, setShowCourses] = useState();

    function handleClick(id) {
        const courseNav = { courseId: id };
        navigate(`/${id}/view`, { state: courseNav });
    }

    useEffect(() => {
        let courseList = [];
        course.getAllCourses().then((data) => {
            data.forEach((courseInfo) => {
                courseList.push(courseInfo);
            });

            const test = courseList.map((courseObject) => (
                <div
                    key={courseObject._id}
                    className="course"
                    onClick={() => {
                        handleClick(courseObject._id);
                    }}
                >
                    <div className="top">
                        <img
                            src={courseObject.bannerImage}
                            alt="course-banner"
                        />
                    </div>
                    <div className="bottom">
                        <div className="left">{courseObject.title}</div>
                        <div className="right">
                        <div className="image-container">
                            <img class="icon" src={`${icons[courseObject.categories[0]]}`} alt="" />
                        </div>
                        </div>
                    </div>
                </div>
            ));
            setShowCourses(test);
        });
    }, []);

    return (
        <>
            <h1>
                All
            </h1>
            <div className="course-grid">{showCourses}</div>
        </>
    );
}

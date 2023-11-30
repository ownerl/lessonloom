import "./Categories.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as course from "../../utilities/courses-api";

export default function CatAll() {
    const navigate = useNavigate();
    const [showCourses, setShowCourses] = useState();
    const icons = {
        Programming: "/programming-icon.svg",
        "Cooking & Nutrition": "/cooking-icon.svg",
        Math: "/math-icon.svg",
        Art: "/art-icon.svg",
        Language: "/business-icon.svg",
        "Business & Marketing": "/fitness-icon.svg",
        "Health & Fitness": "/language-icon.svg",
        DIY: "/img/diy-icon.svg",
        Other: "/img/other-icon.svg",
    };

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
                            <img src={`${icons[courseObject.categories[0]]}`} alt="" />
                        </div>
                            {/* <span
                                class="icon icon-heart"
                                style={{
                                    backgroundImage: `url(${
                                        icons[courseObject.categories[0]]
                                    })`,
                                }}
                            ></span> */}
                        </div>
                    </div>
                </div>
            ));
            setShowCourses(test);
        });
    }, []);

    return (
        <>
            <h1 style={{ backgroundImage: "url(../../img/cooking-icon.svg" }}>
                All
            </h1>
            <div className="course-grid">{showCourses}</div>
        </>
    );
}

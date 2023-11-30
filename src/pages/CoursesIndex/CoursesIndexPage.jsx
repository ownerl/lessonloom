import { useState } from "react";
import "./CoursesIndexPage.css";
import Categories from "../../components/Categories/Categories";
import CatAll from "../../components/Categories/CatAll";

export default function CoursesIndexPage() {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
    }

    return (
        <div className="container">
            <h1>Categories</h1>
            <div className="categories">
                <div className="cat" onClick={() => updateToggle(1)}>
                    All
                </div>
                <div className="cat" onClick={() => updateToggle(2)}>
                    Programming
                </div>
                <div className="cat" onClick={() => updateToggle(3)}>
                    Cooking & Nutrition
                </div>
                <div className="cat" onClick={() => updateToggle(4)}>
                    Math
                </div>
                <div className="cat" onClick={() => updateToggle(5)}>
                    Art
                </div>
                <div className="cat" onClick={() => updateToggle(6)}>
                    Language
                </div>
                <div className="cat" onClick={() => updateToggle(7)}>
                    Business & Marketing
                </div>
                <div className="cat" onClick={() => updateToggle(8)}>
                    Health & Fitness
                </div>
                <div className="cat" onClick={() => updateToggle(9)}>
                    DIY
                </div>
                <div className="cat" onClick={() => updateToggle(10)}>
                    Other
                </div>
            </div>
            <div className={toggle === 1 ? "show-content" : "content"}>
                <CatAll />
            </div>
            <div className={toggle === 2 ? "show-content" : "content"}>
                <Categories category="Programming" />
            </div>
            <div className={toggle === 3 ? "show-content" : "content"}>
                <Categories category="Cooking & Nutrition" />
            </div>
            <div className={toggle === 4 ? "show-content" : "content"}>
                <Categories category="Math" />
            </div>
            <div className={toggle === 5 ? "show-content" : "content"}>
                <Categories category="Art" />
            </div>
            <div className={toggle === 6 ? "show-content" : "content"}>
                <Categories category="Language" />
            </div>
            <div className={toggle === 7 ? "show-content" : "content"}>
                <Categories category="Business & Marketing" />
            </div>
            <div className={toggle === 8 ? "show-content" : "content"}>
                <Categories category="Health & Fitness" />
            </div>
            <div className={toggle === 9 ? "show-content" : "content"}>
                <Categories category="DIY" />
            </div>
            <div className={toggle === 10 ? "show-content" : "content"}>
                <Categories category="Other" />
            </div>
        </div>
    );
}

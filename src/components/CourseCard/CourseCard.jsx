import "./CourseCard.css";
import heart from "../../img/Vector.svg";

export default function Course() {
    return (
        <div className="course">
            <div className="top"></div>
            <div className="bottom">
                <div className="left">Test</div>
                <div className="right">
                    <img src={heart} alt="favourite button" />
                </div>
            </div>
        </div>
    );
}

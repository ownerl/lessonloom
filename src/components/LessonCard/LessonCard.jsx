import "./LessonCard.css";
import { useContext, useEffect, useState } from "react";
import edit from "../../img/edit.svg";
import { UserContext } from "../../pages/App/App";
import { Link } from "react-router-dom";

export default function Lesson({ lessonInfo, idx, courseLessons }) {
  const { user } = useContext(UserContext);
    console.log("lesson present: ", lessonInfo);
    console.log("lesson's index: ", idx)
    console.log("lesson's parent array: ", courseLessons)
    if (lessonInfo) {
        return (
            <div className="course">

<Link to={`/lessons/${lessonInfo._id}`} state={{lessonInfo, idx, courseLessons}}>
                <div className="top">
                    <h1>TESTING</h1>
                </div>
                <div className="bottom">
                    <div className="left">{lessonInfo.title}</div>
                    <div className="right">
                      {user && <img src={edit} alt="favourite button" />}
                    </div>
                </div>
                </Link>
            </div>
        );
    }
}

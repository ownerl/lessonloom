import "./LessonCard.css";
import { useContext, useEffect, useState } from "react";
import edit from "../../img/edit.svg";
import * as lesson from "../../utilities/lesson-api";
import { UserContext } from "../../pages/App/App";
import { Link } from "react-router-dom";

export default function Lesson({ lessonInfo }) {
  const { user } = useContext(UserContext);
    console.log("lesson present: ", lessonInfo);
    if (lessonInfo) {
        return (
            <div className="course">
                <div className="top">
                    <h1>TESTING</h1>
                </div>
                <div className="bottom">
                    <div className="left">{lessonInfo.title}</div>
                    <div className="right">
                      {user && <img src={edit} alt="favourite button" />}
                      <Link to={`/lessons/${lessonInfo._id}`} state={{lessonInfo}}>meander to the route in question</Link>
                      {/* <Link to={{pathname: `/lessons/${lessonInfo._id}`, state: {lessonInfo}}}>meander to the route in question</Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

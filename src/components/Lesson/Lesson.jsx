import "./Lesson.css"
import { useEffect, useState } from "react";
import edit from "../../img/edit.svg"
import * as lesson from "../../utilities/lesson-api";

export default function Lesson({ lessonId }) {
  const [lessonInfo, setLessonInfo] = useState()

  useEffect(() => {
    lesson.getLesson(lessonId).then((les) => {
      setLessonInfo(les);
    }).catch((err) => {
      console.error("Error fetching lesson: ", err)
    })
  }, [])

  console.log('this is lesson info: ', lessonInfo)
  return(
      <div className="course">
      <div className="top"></div>
      <div className="bottom">
        <div className="left">{ lessonInfo.title }</div>
        <div className="right"><img src={edit} alt ="favourite button"/></div>
      </div>
    </div>
  );
}
import "./LessonList.css";
import LessonCard from "../LessonCard/LessonCard";
import { useEffect, useState } from "react";
import * as course from "../../utilities/courses-api";

export default function LessonList({ courseLessons }) {
    // const [courseRefresh, setCourseRefresh] = useState(courseLessons)
    const [listOfLessons, setListOfLessons] = useState();

    console.log("course lessons ids passed to lessonlist: ", courseLessons);
    useEffect(() => {
        if (courseLessons) {
            const lessonArray = courseLessons.map((lesson) => {
                console.log('single lesson: ', lesson)
                return <LessonCard lessonInfo={lesson} courseLessons={courseLessons} key={lesson._id} idx={courseLessons.indexOf(lesson)}/>
            })
            setListOfLessons(lessonArray);
        }
    }, [courseLessons]);
    console.log("listOfLessons: " + listOfLessons)
    console.log("courseLessons:" + courseLessons)

    return <div className="container-grey">{listOfLessons}</div>;
}

// const listOfLessons = async () => {
//   await courseInfo.lessons.map((lesson) => {
//     console.log('each lesson here', lesson)
//     console.log('each lesson._id here', lesson._id)
//     return <p>{lesson}</p>
//   })
// }

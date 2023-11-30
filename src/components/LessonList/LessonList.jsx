import "./LessonList.css"
import LessonCard from "../LessonCard/LessonCard"
import {useEffect, useState} from "react"

export default function LessonList({courseInfo}) {
	const [listOfLessons, setListOfLessons] = useState()
	const courseLessons = courseInfo.lessons

	useEffect(() => {
		if (courseLessons) {
			const lessonArray = courseLessons.map((lesson) => {
				return (
					<LessonCard
						lessonInfo={lesson}
						courseLessons={courseLessons}
						key={lesson._id}
						lessonIdx={courseLessons.indexOf(lesson)}
						courseInfo={courseInfo}
					/>
				)
			})
			setListOfLessons(lessonArray)
		}
	}, [courseLessons])

	return <div className="container-grey">{listOfLessons}</div>
}

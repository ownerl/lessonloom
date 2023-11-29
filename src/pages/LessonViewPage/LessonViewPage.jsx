import {Link, useLocation} from "react-router-dom"
import {useRef, useState} from "react"
import YouTube from "react-youtube"

import "./LessonViewPage.css"
export default function LessonViewPage() {
	const location = useLocation()
	const [lessonInfo, setLessonInfo] = useState(location.state?.lessonInfo)
	const courseLessons = location.state?.courseLessons
	const lessonIdx = location.state?.lessonIdx
	const courseInfo = location.state?.courseInfo

	const videoUrl = lessonInfo.youTubeLink
	const playerRef = useRef(null)

	console.log("courseInfo " + JSON.stringify(courseInfo))

	let videoCode
	try {
		if (videoUrl) {
			videoCode = videoUrl.split("v=")[1].split("&")[0]
		}
	} catch (err) {
		console.log(err)
	}
	const opts = {
		height: "236px",
		width: "420",
		// ====================================================== MAKE THIS RESPONSIVE !!! ================================================ ALSO FIGURE OUT WHY TEXT INTERSECTS AT LARGER SCREEN SIZES
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
		},
	}
	console.log("courseLessons " + JSON.stringify(courseLessons[1]))
	return (
		<div>
			<Link to={`/${courseInfo._id}/view`} state={{courseId: courseInfo._id}}>{courseInfo.title}</Link>
			<div id="lessonNavBar">
				{lessonIdx > 0 && <Link to={`/lessons/${courseLessons[lessonIdx - 1]._id}`} state={{lessonIdx: lessonIdx -1, courseLessons, courseInfo}} onClick={() =>
	setLessonInfo(courseLessons[lessonIdx - 1])}>Previous Lesson</Link>}
			<h1>LESSON {lessonIdx + 1}: {lessonInfo.title.toUpperCase()}</h1>
				{lessonIdx < courseLessons.length - 1 && <Link to={`/lessons/${courseLessons[lessonIdx + 1]._id}`} state={{lessonIdx: lessonIdx + 1, courseLessons, courseInfo}} onClick={() =>
	setLessonInfo(courseLessons[lessonIdx + 1])}>Next Lesson</Link>}
			</div>
				<h2>{lessonInfo.description}</h2>
			<div className="youtube">
				{videoCode ? (
					<YouTube
						videoId={videoCode}
						opts={opts}
						onPause={() => console.log("Paused!")}
						onPlay={() => console.log("Playing!")}
						onReady={(e) => (playerRef.current = e.target)}
					/>
				) : (
					<div></div>
				)}
			</div>
			<h1>Post Lesson Task: {lessonInfo.task}</h1>
			<h2>Notes: {lessonInfo.notes}</h2>
			</div>
	)
}

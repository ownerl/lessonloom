import {Link, useLocation} from "react-router-dom"
import {useRef, useState} from "react"
import YouTube from "react-youtube"

import "./LessonViewPage.css"
export default function LessonViewPage() {
	const location = useLocation()
	const [lessonInfo, setLessonInfo] = useState(location.state?.lessonInfo)
	const courseLessons = location.state?.courseLessons
	const lessonIdx = location.state?.lessonIdx

	const videoUrl = lessonInfo.youTubeLink
	const playerRef = useRef(null)

	console.log(JSON.stringify(lessonInfo))

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
	return (
		<div>
			<h1>course title & link here</h1>
			<div id="lessonNavBar">
				{lessonIdx > 0 && <Link to={`/lessons/${courseLessons[lessonIdx - 1]._id}`} state={{lessonInfo, lessonIdx, courseLessons}}>Previous Lesson</Link>}
			<h1>LESSON {lessonIdx + 1}: {lessonInfo.title.toUpperCase()}</h1>
				{lessonIdx < courseLessons.length - 1 && <Link to={`/lessons/${courseLessons[lessonIdx + 1]._id}`} state={{lessonInfo, lessonIdx, courseLessons}}>Next Lesson</Link>}
			</div>

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

			<h2>{lessonInfo.description}</h2>
			<h2>Post Lesson Task: {lessonInfo.task}</h2>
			<h2>Notes: {lessonInfo.notes}</h2>
		</div>
	)
}

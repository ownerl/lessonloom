import {useLocation} from "react-router-dom"
import {useRef} from "react"
import YouTube from "react-youtube"
export default function LessonViewPage() {
	const location = useLocation()
	const lessonInfo = location.state?.lessonInfo
	const courseLessons = location.state?.courseLessons
	const lessonIdx = location.state?.idx

	const videoUrl = lessonInfo.youTubeLink
	const playerRef = useRef(null)

	let videoCode
	try {
		if (videoUrl) {
			videoCode = videoUrl.split("v=")[1].split("&")[0]
		}
	} catch (err) {
		console.log(err)
	}
	const opts = {
		height: "230",
		width: "487",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
		},
	}
	return (
		<div>
			<h1>course title & link here</h1>
			<h1>LESSON (INSERT): {lessonInfo.title}</h1>

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

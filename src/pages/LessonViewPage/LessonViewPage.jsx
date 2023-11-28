import {useLocation} from "react-router-dom"
import { useRef } from "react"
import YouTube from "react-youtube"
export default function LessonViewPage({state}) {
	const location = useLocation()
	const lessonInfo = location.state?.lessonInfo

	const playerRef = useRef(null)
	const opts = {
		height: "230",
		width: "487",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 0,
		},
	}
	console.log("lessonInfo: " + lessonInfo._id)
	console.log("state: " + location.state)
	return (
		<div>
			<h1>course title & link here</h1>
			<h1>{lessonInfo.title}</h1>
			<h2>video here</h2>




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
                    <div className="form-container">
                        {/* <label>YouTube Link</label>
                <p>https://www.youtube.com/watch?v=kkSf95iI984</p> */}
                        <input
                            className="url"
                            name="youTubeLink"
                            placeholder="https://www.youtube.com/watch?v=kkSf95iI984"
                            value={videoUrl}
                            onChange={(evt) => {
                                setVideoUrl(evt.target.value);
                                setLessonInfo({ ...lessonInfo, [evt.target.name]: evt.target.value });
                            }}
                        />
                        <button
                            className="youtube-btn"
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                    </div>






			<h2>{lessonInfo.description}</h2>
			<h2>{JSON.stringify(lessonInfo)}</h2>
		</div>
	)
}

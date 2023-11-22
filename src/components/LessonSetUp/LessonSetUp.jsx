import { useRef, useState } from "react";
import YouTube from "react-youtube";
import "./LessonSetUp.css";
import * as lesson from "../../utilities/lesson-api";

export default function LessonSetUp() {
    const [lessonInfo, setLessonInfo] = useState({
        title: "",
        description: "",
    });
    const [error, setError] = useState("");

    function handleChange(evt) {
        setLessonInfo({ ...lessonInfo, [evt.target.name]: evt.target.value });
        setError("");
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            lesson.createLesson(lessonInfo);
        } catch {
            setError("Failed To Create lesson");
        }
    }

    const [videoUrl, setVideoUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);

    let videoCode;
    try {
        if (videoUrl) {
            videoCode = videoUrl.split("v=")[1].split("&")[0];
        }
    } catch (err) {
        console.log(err);
    }
    const opts = {
        height: "230",
        width: "487",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const togglePlayPause = (evt) => {
        evt.preventDefault();
        if (playerRef.current) {
            isPlaying
                ? playerRef.current.pauseVideo()
                : playerRef.current.playVideo();
            setIsPlaying(!isPlaying);
        }
    };

    function testFunction() {
        console.log("pause func works");
    }

    return (
        <form className="lessonSetUp" action="">
            <div className="top-half">
                <div className="left-side">
                    <input
                        className="title"
                        placeholder="Title"
                        type="text"
                        name="title"
                        value={lessonInfo.title}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="description"
                        placeholder="Description"
                        type="text"
                        name="description"
                        value={lessonInfo.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="right-side">
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
                            placeholder="https://www.youtube.com/watch?v=kkSf95iI984"
                            value={videoUrl}
                            onChange={(evt) => setVideoUrl(evt.target.value)}
                        />
                        <button
                            className="youtube-btn"
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? "Pause" : "Play"}
                        </button>
                    </div>
                    {/* <input type="text" className="url" placeholder="Insert Youtube URL"/> */}
                </div>
            </div>
            <div className="bottom-half">
                <input
                    className="task"
                    placeholder="Post Lesson Task"
                    type="text"
                    name="task"
                    value={lessonInfo.task}
                    onChange={handleChange}
                    required
                />
                <input
                    className="notes"
                    placeholder="Extra Notes"
                    type="text"
                    name="notes"
                    value={lessonInfo.notes}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="button-row">
                <button className="delete">Delete</button>
                <button type="submit" className="save">Save</button>
            </div>
        </form>
    );
}

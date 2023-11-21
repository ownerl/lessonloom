import { useRef, useState } from "react";
import YouTube from 'react-youtube';
import './LessonSetUp.css'

export default function LessonSetUp() {
  const [videoUrl, setVideoUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(true)
    const playerRef = useRef(null);

    let videoCode;
    try {
        if (videoUrl) {
            videoCode = videoUrl.split("v=")[1].split("&")[0];
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
    };

    const togglePlayPause = (evt) => {
      evt.preventDefault();
        if (playerRef.current) {
            isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
            setIsPlaying(!isPlaying);
        }
    }

    function testFunction() {
        console.log('pause func works')
    }

  return (
    <form className="lessonSetUp" action="">
      <div className="top-half">
        <div className="left-side">
          <input placeholder="Lesson Title" />
          <input className='description' placeholder="Decription" />
        </div>
        <div className="right-side">
          <div className="youtube">
          { videoCode ? <YouTube 
                videoId={videoCode} 
                opts={opts}
                onPause={() => console.log('Paused!')}
                onPlay={() => console.log('Playing!')}
                onReady={(e) => playerRef.current = e.target}
                />
                :
                <div></div>
            }
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
                <button className="youtube-btn" onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
          {/* <input type="text" className="url" placeholder="Insert Youtube URL"/> */}
        </div>
      </div>
      <div className="bottom-half">
        <input className="task" type="text" placeholder="Post Lesson Task"/>
        <input className="notes" type="text" placeholder="Extra Notes"/>
      </div>
      <div className="button-row">
      <button className='delete'>Delete</button>
      <button className='save'>Save</button>
      </div>
    </form>
  );
}
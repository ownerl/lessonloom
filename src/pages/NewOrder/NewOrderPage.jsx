import { useRef, useState } from "react";
import YouTube from 'react-youtube';

export default function NewOrderPage() {
    const [videoUrl, setVideoUrl] = useState("");
    const [isPlaying, setIsPlaying] = useState(true)
    const playerRef = useRef(null);

    let videoCode;
    if (videoUrl) {
        videoCode = videoUrl.split("v=")[1].split("&")[0];
    }
    const opts = {
        height: "400",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const togglePlayPause = () => {
        if (playerRef.current) {
            isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
            setIsPlaying(!isPlaying);
        }
    }

    function testFunction() {
        console.log('pause func works')
    }
    return (
        <main>
            <h1>NewOrderPage</h1>
            <p>https://www.youtube.com/watch?v=kkSf95iI984</p>
            <p>https://www.youtube.com/watch?v=PkkFHO0kxPw</p>
            <p>https://www.youtube.com/embed/PkkFHO0kxPw?si=pXBsZqgSDhpuJMbz</p>
            <YouTube 
                videoId={videoCode} 
                opts={opts}
                onPause={() => console.log('Paused!')}
                onPlay={() => console.log('Playing!')}
                onReady={(e) => playerRef.current = e.target}
                />
            <div className="form-container">
                <label>YouTube Link</label>
                <input
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                />
                <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </main>
    );
}

import { useEffect, useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isPlaying, setPlaying] = useState(false);
  useEffect(() => {
    // some code
  });
  return (
    <>
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src={`https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4`}
      />
    </>
  );
}

export default App;

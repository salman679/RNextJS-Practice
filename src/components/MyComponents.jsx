import { useState } from "react";
import VideoPlayer from "./VideoPlayer";

function App() {
  const [isPlaying, setPlaying] = useState(false);
  const [text, setText] = useState();
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setPlaying(!isPlaying)}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

export default App;

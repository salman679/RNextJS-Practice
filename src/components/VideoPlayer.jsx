import { useEffect, useRef } from "react";

export default function VideoPlayer({ isPlaying, src }) {
  const ref = useRef(null);

  //   const [counter, setCounter] = useState(0);
  //   its bad practice. because its contains loop.
  //   useEffect(() => {
  //     setCounter(counter + 1);
  //   });
  //   return (

  useEffect(() => {
    if (isPlaying) {
      console.log("Calling video.play()");
      ref.current.play();
    } else {
      console.log("Calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <video ref={ref} src={src} loop playsInline></video>
    </>
  );
}

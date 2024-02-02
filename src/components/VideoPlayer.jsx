import { useEffect, useRef } from "react";

export default function VideoPlayer({ isPlaying, src }) {
  const ref = useRef();

  console.dir(ref.current);
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });
  return (
    <>
      <video ref={ref} src={src}></video>
    </>
  );
}

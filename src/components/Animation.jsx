import { useEffect, useRef } from "react";

export default function Animation() {
  const AnimationRef = useRef();

  useEffect(() => {
    const node = AnimationRef.current;
    node.style.opacity = 1;

    return () => (node.style.opacity = 0);
  });
  return <h4 ref={AnimationRef}>This is an Animation</h4>;
}

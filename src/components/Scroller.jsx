import { useEffect } from "react";

export default function Scroller() {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <p style={{ fontSize: "100px" }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, iste porro
      quos aspernatur, eaque temporibus, cum aliquam nihil ea magni vitae
      inventore voluptates! Sunt ducimus laborum, quia eaque ab perferendis!
    </p>
  );
}

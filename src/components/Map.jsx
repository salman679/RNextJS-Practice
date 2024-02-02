import { useEffect, useRef } from "react";
import map from "../assets/map.jpg";

export default function Map() {
  const mapRef = useRef();
  useEffect(() => {
    console.log("Zooming");

    mapRef.current.setZoomLabel(0.2);
  });

  return (
    <div>
      <div>
        <img ref={mapRef} src={map} alt="map" />
      </div>
    </div>
  );
}

import { Box, Circle, Heart, Hexagon, Square, Triangle } from "react-feather";

export default function ShapeDemo() {
  return (
    <div>
      <h1 className="text-4xl font-bold mt-4">ShapeDemo</h1>
      <div className="flex">
        <Square color="black" size={128} />
        <Triangle color="black" size={128} />
        <Circle color="black" size={128} />
        <Box color="black" size={128} />
        <Heart color="black" size={128} />
        <Hexagon color="black" size={128} />
      </div>
    </div>
  );
}

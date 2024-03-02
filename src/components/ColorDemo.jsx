import { Circle } from "react-feather";

export default function ColorDemo() {
  const colorMap = ["#A463578", "teal", "#000000", "orange", "red", "green"];
  return (
    <div>
      <h1 className="text-4xl font-bold mt-4 ">Color Demo</h1>
      <div className="flex ">
        {colorMap.map((color, index) => {
          return <Circle color={color} size={128} fill={color} key={index} />;
        })}
      </div>
    </div>
  );
}

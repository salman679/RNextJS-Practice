import { Circle } from "react-feather";

export default function SizeDemo() {
  const SizeMap = ["16", "32", "48", "64", "96", "128", "144"];

  return (
    <>
      <h1 className="text-4xl font-bold mt-4">SizeDemo</h1>
      <div className="flex">
        {SizeMap.map((size, index) => (
          <Circle color="black" fill="black" size={size} Key={index} />
        ))}
      </div>
    </>
  );
}

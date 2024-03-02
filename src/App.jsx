import { Suspense, useState } from "react";
import "./App.css";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState();

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };

  const selectDemo = async (file) => {
    const DemoComponent = await loadDemo(file);

    setSelectedDemo(DemoComponent);
  };
  return (
    <>
      <h1 className="text-4xl font-bold">React Lazy Load</h1>

      <div className="flex flex-row gap-2">
        {demos.map((demo) => (
          <button
            key={demo.id}
            className="bg-amber-700 p-2 rounded text-white"
            onClick={() => selectDemo(demo.file)}
          >
            {demo.name}
          </button>
        ))}
      </div>

      <div>
        <Suspense fallback={<h1>Loading Component...</h1>}>
          {selectedDemo}
        </Suspense>
      </div>
    </>
  );
}

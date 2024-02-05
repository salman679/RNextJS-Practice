// import ExampleOne from "./components/ExampleOne";
import { useState } from "react";
import ExampleThree from "./components/ExampleThree";
import { items1, items2 } from "./data/data";
// import ExampleTwo from "./components/ExampleTwo";

function App() {
  // const [userId, setUserId] = useState();
  const [items, setItems] = useState(items1);
  return (
    <>
      {/* ExampleOne: Updating state based on props or state */}
      {/* <ExampleOne /> */}

      {/* ExampleTwo: Resetting all state when a prop changes */}
      {/* <button onClick={() => setUserId(userId === 1 ? 2 : 1)}>
        Switch To Profile NO: {userId === 1 ? 2 : 1}
      </button>
      <ExampleTwo key={userId} userId={userId} /> */}

      {/* ExampleThree: Adjusting some state when a prop changes */}
      <button onClick={() => setItems(items1)}>Switch To Item1</button>
      <button onClick={() => setItems(items2)}>Switch To Item2</button>
      <ExampleThree items={items} />
    </>
  );
}

export default App;

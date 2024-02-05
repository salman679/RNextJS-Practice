import "./App.css";
import Example9 from "./components/Example9";

export default function App() {
  // // const [isOn, setIsOn] = useState(false); // example 7
  // const data = useSomeAPI(); // example 8

  return (
    <div>
      {/* example 7 */}
      {/* <p>{isOn ? "On" : "Off"}</p>
      <Example7 onChange={setIsOn} /> */}

      {/* example 8 */}
      {/* <p>{data && data}</p>
      <Example8 data={data} /> */}

      {/* Example9 */}
      <Example9 />
    </div>
  );
}

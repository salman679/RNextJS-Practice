import { useState } from "react";
import "./App.css";
import ChatRoom from "./components/ChatRoom";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show ? <ChatRoom /> : ""}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { createConnection } from "../utilities/createConnection";

// const serverUrl = "https://localhost:1234";  //Part2 inside the effect

// Part1 : outside of Component as sa reference of object
// const options = {
//   serverUrl: "https://localhost:1234",
//   roomId: "music",
// };

// Part1 : outside of Component as sa reference of function
// function createOption() {
//   return {
//     serverUrl: "https://localhost:1234",
//     roomId: "music",
//   };
// }

export default function ChatRoom({ options }) {
  const [message, setMessage] = useState("");

  // Temporarily disable the linter to demonstrate the problem
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // const options = {
  //   serverUrl: serverUrl,
  //   roomId: roomId,
  // };

  const { roomId, serverUrl } = options; //Part3 read primitive value

  useEffect(() => {
    // part2: inside the effect as a object
    // const options = {
    //   serverUrl: serverUrl,
    //   roomId: roomId,
    // };

    // part2: inside the effect as a function
    // function createOption() {
    //   return {
    //     serverUrl: serverUrl,
    //     roomId: roomId,
    //   };
    // }
    const connection = createConnection({
      roomId: roomId,
      serverUrl: serverUrl,
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}

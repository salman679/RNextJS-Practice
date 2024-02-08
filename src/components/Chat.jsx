import { useState } from "react";
import ChatRoom from "./ChatRoom";
const serverUrl = "https://localhost:1234"; //Part3 read Primitive value

export default function Chat() {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom
        // roomId={roomId}
        //part3: read primitive value
        options={{
          serverUrl: serverUrl,
          roomId: roomId,
        }}
      />
    </>
  );
}

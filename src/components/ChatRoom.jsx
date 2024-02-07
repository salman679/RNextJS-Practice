import { useEffect } from "react";
import { createConnection } from "../utilities/chat";

const serverUrl = "https://localhost:1234";

export function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]); // <-- Fix the mistake here!
  return <h1>Welcome to the {roomId} room!</h1>;
}

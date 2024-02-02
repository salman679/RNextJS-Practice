import { useEffect } from "react";
import { createConnection } from "../utilities/Chat";

export default function ChatRoom() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();

    // cleanUp mount
    return () => {
      connection.disconnect();
    };
  }, []);

  return (
    <>
      <h1>Welcome to the chat!</h1>
    </>
  );
}

import {
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import { createConnection } from "../utilities/chat";

export function useChatRoom({ serverUrl, roomId, onReceiveMassage }) {
  const onMassage = useEffectEvent(onReceiveMassage);

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on("message", (msg) => {
      onMassage(msg);
    });
    return () => connection.disconnect();
  }, [onMassage]);
}

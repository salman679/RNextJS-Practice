import { useSyncExternalStore } from "react";

export default function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
}

function subscribe(callback) {
  // subscribe
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  // cleanUp
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

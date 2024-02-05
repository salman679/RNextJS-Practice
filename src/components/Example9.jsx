import useOnlineStatus from "../hooks/UseOnlineStatus";

export default function Example9() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <div>I am {isOnline ? "Online" : "Offline"}</div>
    </div>
  );
}

// function useOnlineStatus() {
//   // Not ideal: Manual store subscription in an Effect
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function updateState() {
//       setIsOnline(navigator.onLine);
//     }

//     updateState();

//     // subscribe
//     window.addEventListener("online", updateState);
//     window.addEventListener("offline", updateState);

//     // cleanUp
//     return () => {
//       window.removeEventListener("online", updateState);
//       window.removeEventListener("offline", updateState);
//     };
//   }, []);
//   return isOnline;
// }

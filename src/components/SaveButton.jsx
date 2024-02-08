import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const [isOnline, setIsOnline] = useOnlineStatus();

  function handleChange() {
    setIsOnline((l) => !l);
  }

  return (
    <button disabled={isOnline === false} onClick={handleChange}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

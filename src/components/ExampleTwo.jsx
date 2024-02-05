import { useState } from "react";

export default function ExampleTwo({ userId }) {
  const [comments, setComments] = useState();

  // 🔴 Avoid: Resetting state on prop change in an Effect
  //   useEffect(() => {
  //     setComments("");
  //   }, [userId]);

  return (
    <div>
      <h1>Profile Id: {userId}</h1>
      <div>
        <input
          type="text"
          value={comments}
          onChange={() => setComments(event.target.value)}
        />
      </div>
      <p style={{ backgroundColor: "lightcyan" }}>{comments}</p>
    </div>
  );
}

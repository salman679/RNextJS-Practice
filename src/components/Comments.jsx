import { useEffect, useState } from "react";
import { fetchComments } from "../utilities/fetchComments";

export default function Comments({ postId }) {
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function startFetching() {
      const json = await fetchComments(postId);

      if (!ignore) {
        setComments(json);
      }
    }

    startFetching();

    return () => {
      ignore = true;
    };
  }, [postId]);

  return (
    <ul>
      {Comments.map((comment) => (
        <li key={comment.id}>{comment.name}</li>
      ))}
    </ul>
  );
}

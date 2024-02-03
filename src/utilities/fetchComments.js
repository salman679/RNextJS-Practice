export const fetchComments = async (commentId) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${commentId}/comments`
  );

  return result.json();
};

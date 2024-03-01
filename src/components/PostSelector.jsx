import FetchPost from "../api/FetchPost";

const resource = FetchPost(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);

export default function PostSelector({ onSelectPost }) {
  const posts = resource.read();

  return (
    <div>
      <select
        className="border border-gray-500 rounded-md capitalize my-5 focus:outline-none"
        onChange={onSelectPost}
      >
        <option value="">Select Post</option>
        {posts.map((post) => (
          <option key={post.id} value={post.id}>
            {post.title}
          </option>
        ))}
      </select>
    </div>
  );
}

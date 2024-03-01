import { Suspense, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

export default function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  function handleSelectPost(event) {
    setSelectedPostId(event.target.value);
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">
          React Suspense and Error Boundaries
        </h1>
        <div>
          <ErrorBoundary fallback={<h1>Error in fetching post...</h1>}>
            <Suspense fallback={<h1>Loading Post........</h1>}>
              <PostSelector onSelectPost={handleSelectPost} />
            </Suspense>

            {selectedPostId && (
              <Suspense fallback={<h1>Loading Comment...</h1>}>
                <Comments postId={selectedPostId} />
              </Suspense>
            )}
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

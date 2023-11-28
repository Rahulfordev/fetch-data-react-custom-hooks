import useFetch from "./useFetch.js";
import "./data.css";

import PostDataShow from "../PostData/PostDataShow.jsx";

const PostDataFetch = () => {
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const allPost =
    data &&
    data.slice(0, 40).map((post) => <PostDataShow key={post.id} post={post} />);
  return (
    <section>
      <h1>Post Data</h1>
      <div className="post-section">
        {allPost}
        <p>{error}</p>
      </div>
    </section>
  );
};

export default PostDataFetch;

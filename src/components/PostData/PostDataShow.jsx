/* eslint-disable react/prop-types */
import "./PostDataShow.css";
const PostDataShow = (props) => {
  const { id, title, body } = props.post;
  return (
    <div className="post">
      <div className="post__container">
        <p className="post__id">ID: {id}</p>
        <h4 className="post__title">Title: {title}</h4>
        <p className="post__body">Body: {body}</p>
      </div>
    </div>
  );
};

export default PostDataShow;

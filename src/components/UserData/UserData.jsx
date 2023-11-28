/* eslint-disable react/prop-types */
import "./UserDataShow.css";
const UserData = (props) => {
  const { id, name, username, email } = props.user;
  return (
    <div className="user">
      <div className="user-container">
        <h4>ID: {id}</h4>
        <h4>Name: {name}</h4>
        <h4>User Name: {username}</h4>
        <h4>Email: {email}</h4>
      </div>
    </div>
  );
};

export default UserData;

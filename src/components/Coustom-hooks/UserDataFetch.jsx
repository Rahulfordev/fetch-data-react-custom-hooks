import useFetch from "./useFetch.js";

import UserData from "../UserData/UserData.jsx";

const UserDataFetch = () => {
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const allUser =
    data && data.map((user) => <UserData key={user.id} user={user} />);
  return (
    <section>
      <h1>User Data</h1>
      <div className="user-section">
        {allUser}
        <p>{error}</p>
      </div>
    </section>
  );
};

export default UserDataFetch;

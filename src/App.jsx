import "./App.css";
import PostDataFetch from "./components/Coustom-hooks/PostDataFetch";
import UserDataFetch from "./components/Coustom-hooks/UserDataFetch";
function App() {
  return (
    <>
      <div>
        <PostDataFetch />
        <UserDataFetch />
      </div>
    </>
  );
}

export default App;

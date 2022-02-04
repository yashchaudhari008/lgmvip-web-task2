import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";
import Header from "./components/Header";

const apiLink = "https://reqres.in/api/users?page=1";

function App() {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchUser = () => {
    setIsFetching(true);
    fetch(apiLink)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
        setIsFetching(false);
      });
  };

  return (
    <div className="App">
      <Header />
      <button disabled={users.length !== 0 ? true : false} onClick={fetchUser}>
        Fetch Users
      </button>
      <br />
      {isFetching ? (
        <p className="appMessage">Please Wait! Fetching Users</p>
      ) : (
        <div className="cardHolder">
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;

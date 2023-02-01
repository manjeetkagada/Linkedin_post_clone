import { useEffect, useState } from "react";
import axios from "axios";
import ListCardView from "./ListCardView";
import "./App.css";
function App() {
  const [user, setUser] = useState([]);
  const apiUrl = `https://api.github.com/users`;
  const Users = async () => {
    const results = await axios.get(apiUrl).then((res) => setUser(res.data));
  };
  useEffect(() => {
    Users();
  }, []);
  const handle = () => {
    console.log(user);
  };

  return (
    <div className="app">
      <h1 onClick={handle}>Linkedin Post </h1>

      <div className="post">
        {user.map((user) => {
          return (
            <>
              <ListCardView profile={user.avatar_url} login={user.login} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;

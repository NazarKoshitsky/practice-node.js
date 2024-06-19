import { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/users");
        setUsers(data);
      } catch (error) {
        setError(error.response.data);
      }
    };
    fetchUsers();
  }, []);

  const elements = users.map(({ id, title, director }) => (
    <li key={id}>
      Title: {title}. Director: {director}.
    </li>
  ));

  if (error) {
    return (
      <p
        style={{ color: "red" }}
      >{`Error: ${error.message} Status: ${error.status}`}</p>
    );
  }
  return <ul>{elements}</ul>;
};

export default UserList;

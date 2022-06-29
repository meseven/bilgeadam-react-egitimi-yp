import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [deletedUsers, setDeletedUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  const addUser = (data) => {
    setUsers((prev) => [...prev, { id: uuidv4(), ...data }]);
  };

  const remove = (id) => {
    const cloned = [...users];
    const index = cloned.findIndex((user) => user.id === id);

    setDeletedUsers((prev) => [...prev, users[index]]);
    cloned.splice(index, 1);
    setUsers(cloned);
  };

  const restore = (id) => {
    const cloned = [...deletedUsers];
    const index = cloned.findIndex((user) => user.id === id);

    setUsers((prev) => [deletedUsers[index], ...prev]);
    cloned.splice(index, 1);
    setDeletedUsers(cloned);
  };

  const values = {
    users,
    addUser,
    remove,
    deletedUsers,
    restore,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUsers = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("custom error message");
  }

  return context;
};

import React, { useState } from "react";

const names = [
  "Mehmet",
  "Mustafa",
  "Ahmet",
  "Ali",
  "Hüseyin",
  "Hasan",
  "İbrahim",
  "İsmail",
  "Osman",
  "Yusuf",
  "Fatma",
  "Ayşe",
  "Emine",
  "Hatice",
  "Zeynep",
  "Elif",
  "Meryem",
  "Selma",
  "Şerife",
  "Zehra",
  "Sultan",
  "Hanife",
  "Merve",
];

function Users() {
  const [users, setUsers] = useState(["Ahmet", "Mehmet", "Ayşe"]);

  const handleClick = () => {
    setUsers((prev) => [
      ...prev,
      names[Math.floor(Math.random() * names.length)],
    ]);
  };

  const remove = (i) => {
    const cloned = [...users];
    cloned.splice(i, 1);
    setUsers(cloned);
  };

  return (
    <div>
      <h1>Users</h1>
      {users.map((user, i) => (
        <div key={i}>
          <span className="name">{user}</span>{" "}
          <button onClick={() => remove(i)}>Sil</button>
        </div>
      ))}

      <br />
      <button onClick={handleClick}>Rastgele İsim Ekle</button>
    </div>
  );
}

export default Users;

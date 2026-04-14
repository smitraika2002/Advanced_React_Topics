// This component fetches a list of 5 users from the Random User API and displays them in a table.

import { useEffect, useState } from "react";

export default function Fetchsuer_ue() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(data => {
        setUsers(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Country</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name.first} {user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.location.country}</td>
              <td>{user.dob.age}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(JSON.parse(window.localStorage.getItem("users")));
  }, []);
  if (users === null) setUsers([]);
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.age}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Users;

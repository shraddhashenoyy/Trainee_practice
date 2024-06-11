import React, { useEffect, useState } from 'react';


const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      
      <main>
        <h1>Users</h1>
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {/* <p>{user.address.street}, {user.address.city}</p> */}
            <p><a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <p>{user.company.name}</p>
          </div>
        ))}
      </main>
      
    </>
  );
};

export default Users;
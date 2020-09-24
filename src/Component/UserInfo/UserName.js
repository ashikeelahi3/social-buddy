import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function UserName({userId}) {

  const [name, setName] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setName(data.name));
  }, [userId])

  return (
    <Link to={`/user/${userId}`}>
      <span>{name}</span>
    </Link>
  );
}

export default UserName;

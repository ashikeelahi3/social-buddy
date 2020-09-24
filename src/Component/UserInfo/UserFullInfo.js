import React, {useEffect, useState} from 'react';
import UserPosts from '../UserPosts/UserPosts';

const UserFullInfo = ({userId}) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [userId])
  
  const {name, email, phone} = user;


  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <UserPosts key={userId} userId={userId}/>
    </div>
  );
};

export default UserFullInfo;
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import UserFullInfo from '../UserInfo/UserFullInfo';
import './UserDetail.css';

const UserDetail = () => {
  let { user } = useParams();

  const [profilePic, setProfilePic] = useState([]);

  useEffect(() => {
    setProfilePic(`https://randomuser.me/api/portraits/men/${user}.jpg`);
  },[user])

  return (
    <div className="center">
      <img src={profilePic} alt="" />
      <UserFullInfo key={user} userId={user}/>
    </div>
  );
};

export default UserDetail;
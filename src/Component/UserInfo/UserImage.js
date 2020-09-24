import React, { useEffect, useState} from 'react';

const UserImage = ({userId}) => {

  const [profilePic, setProfilePic] = useState([]);

  useEffect(() => {
    setProfilePic(`https://randomuser.me/api/portraits/thumb/men/${userId}.jpg`);
  },[userId])

  return (
    <img src={profilePic} alt=""/>
  );
};

export default UserImage;
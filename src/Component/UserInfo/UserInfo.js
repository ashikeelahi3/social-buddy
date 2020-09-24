import React from 'react';
import UserImage from './UserImage';
import UserName from './UserName';
import './UserInfo.css'



function UserInfo({userId}) {

  return (
    <div className="displayFlex">
      <UserImage userId={userId} />
      <UserName userId={userId}/>
    </div>
  );
}

export default UserInfo;

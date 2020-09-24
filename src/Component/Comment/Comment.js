import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import UserInfo from '../UserInfo/UserInfo';
import './Comment.css'




const Comment = ({ comment }) => {
  const { body, postId, id } = comment;



  const user = (id % 5) ? (parseInt(postId / 10) + (id % 5) + 1) :( parseInt(postId / 10) + 6);
// };
  const userId = (user > 10) ? (user % 10) : user;


  console.log(userId)


  return (
    <div className='comment'>
      <UserInfo userId={userId} />
      <br/>
      <SnackbarContent message={body}/>
    </div>
  );
};

export default Comment;
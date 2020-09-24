import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = ({ postId }) => {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then(data => setComments(data))
  }, [postId])

  // console.log(comments)
  return (
    <div>
      <h4>Comments: </h4>
      {
        comments.map(comment => <Comment key={comment.id} comment={comment}/>)
      }
    </div>
  );
};

export default Comments;
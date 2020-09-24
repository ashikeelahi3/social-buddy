import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Post from '../Post/Post';

const PostDetail = () => {
  const { postId } = useParams();
  
  const [post, setPost] = useState([]);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [postId])



  return (
    <Post key={postId} post={post}>
      <Comments key={postId} postId={postId}/>
    </Post>
  );
};

export default PostDetail;
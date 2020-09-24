import React, {useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';

const UserPosts = ({userId}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [userId])

  console.log(posts)
  console.log(userId)

  return (
    <div>
      {
        posts.map(post => 
        <Post key={post.id} post={post}>
          <Link to={`/post/${post.id}`}>
              <Button variant="contained" color="secondary">
                See More
              </Button>
          </Link>
        </Post>)
      }
    </div>
  );
};

export default UserPosts;
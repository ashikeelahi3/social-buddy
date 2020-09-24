import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post/Post';
import SeeMoreBtn from '../SeeMoreBtn/SeeMoreBtn';

const Home = () => {
  const [allPost, setAllPost] = useState([]);
  const [showPost, setShowPost] = useState([]);
  const [showPostCount, setShowPostCount] = useState(20);

  const handelPost = () => {
    setShowPostCount(showPostCount + 10);
    setShowPost(allPost.slice(0, showPostCount))
  }

  const shuffleData = array => {
    const shuffle = require('shuffle-array'),
    collection = array;
    shuffle(collection);
    setAllPost(collection)
  }

  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        shuffleData(data);
        setShowPost(data.slice(0, 10))
      })
  }, [])


  return (
    <div>
      <p>{showPost.length}</p>
      {
      showPost.map(post =>
          <Post key={post.id} post={post}>
          <Link to={`/post/${post.id}`}>
              <Button variant="contained" color="secondary">
                See More
              </Button>
          </Link>
          
        </Post>)
      }
      {
        (showPostCount < 101 ) && <SeeMoreBtn func={handelPost} />
      }
    </div>
  );
};

export default Home;
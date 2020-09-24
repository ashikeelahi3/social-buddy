import React from 'react';
import { Button } from '@material-ui/core';
import './SeeMoreBtn.css';


const SeeMoreBtn = ({ func }) => {
  return (
    <div className='btn-div'>
      <Button variant="contained" color="secondary" onClick={func} className='button'>
        See More Post
      </Button>
    </div>
  );
};

export default SeeMoreBtn;
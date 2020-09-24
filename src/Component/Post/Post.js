import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UserInfo from '../UserInfo/UserInfo';

const Post = ({ post, children }) => {
  
  const { title, body, userId } = post;



  const useStyles = makeStyles({
    root: {
      maxWidth: 650,
      background: 'white',
      margin: '10px auto',
      textAlign: 'left'
    },
    title: {
      fontSize: 20,
      marginBottom: 12,
    },
    profile_pic: {
      marginRight: 5
    },
  });

  const classes = useStyles();




  return (

    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h4" component="h1">
          <UserInfo key={userId} userId={userId}/>
        </Typography>
        <Typography className={classes.title} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p" className={classes.body}>
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
};

export default Post;
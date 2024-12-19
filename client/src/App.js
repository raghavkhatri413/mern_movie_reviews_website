import React from 'react';
import { Container, AppBar, Typography, Grow, Grid2 } from '@mui/material';
import logo from './logos/Short-Take.png';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles.js';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import getPosts from './actions/posts.js';

const App = () => {
  const classes=useStyles();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">ShortTake</Typography>
        <img className={classes.image} src={logo} alt="shorttake logo" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid2 container spacing={3}>
            <Grid2 item xs={12} sm={7}>
              <Posts />
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Form />
            </Grid2>
          </Grid2>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

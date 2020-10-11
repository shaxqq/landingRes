import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Profile } from './Profile';
import { About } from './About';



const useStyles = makeStyles(()=>({
  root: {
    background: '#2d2e2e',
  }
}))

export const App = () => {
 const classes = useStyles()

  return (
    <div className={classes.root}>
      <Profile />
      <About />
    </div>
  );
}


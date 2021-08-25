import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    background: 'none',
    height: '300px',
    display: 'flex',
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {},
  },
}));

const ThirdBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Typography variant="h1">Third</Typography>
      </Grid>
    </>
  );
};

export default ThirdBanner;

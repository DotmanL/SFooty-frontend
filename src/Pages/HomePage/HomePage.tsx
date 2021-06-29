import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TopBanner from '../../Components/TopBanner/TopBanner';
// import { NavBar } from '../../Components/Shared/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default,
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <TopBanner />
    </Grid>
  );
};

export default HomePage;

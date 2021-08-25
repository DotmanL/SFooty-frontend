import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Spiral from '../assets/spiralbg.svg';
import TopBanner from '../../Components/HomePage/TopBanner';
import SecondBanner from '../../Components/HomePage/SecondBanner';
// import ThirdBanner from '../../Components/HomePage/ThirdBanner';
import { NavBar } from '../../Components/Shared/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: theme.palette.info.main,
    position: 'relative',
    height: 'auto',
    padding: theme.spacing(2, 1, 10, 1),
    backgroundImage: `url(${Spiral})`,
    backgroundSize: 'cover',
    marginTop: theme.spacing(-9),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '40px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginTop: theme.spacing(0),
      padding: theme.spacing(1, 0, 13, 0),
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <NavBar appName="Sporty" />
      <TopBanner />
      <SecondBanner />
      {/* <ThirdBanner /> */}
    </Grid>
  );
};

export default HomePage;

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Spiral from './assets/spiralbg.svg';
import TopBanner from '../../Components/HomePage/TopBanner';
import SecondBanner from '../../Components/HomePage/SecondBanner';
import ThirdBanner from '../../Components/HomePage/ThirdBanner';
import { NavBar } from '../../Components/Shared/Components/NavBar';
import Footer from '../../Components/HomePage/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'auto',
    padding: theme.spacing(2, 0, 0, 0),
    backgroundImage: `url(${Spiral})`,
    boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.4)',
    backgroundSize: 'cover',
    marginTop: theme.spacing(-9),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      fontSize: '40px',
      backgroundSize: 'contain',
      // backgroundRepeat: 'no-repeat',
      marginTop: theme.spacing(0),
      padding: theme.spacing(1, 0, 0, 0),
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
      <ThirdBanner />
      <Footer />
    </Grid>
  );
};

export default HomePage;

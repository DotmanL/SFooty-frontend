import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Spiral from './assets/spiralbg.svg';
import TopBanner from '../../Components/HomePage/TopBanner';
import SecondBanner from '../../Components/HomePage/SecondBanner';
import ThirdBanner from '../../Components/HomePage/ThirdBanner';
import { NavBar } from '../../Components/Shared/Components/NavBar';
import Footer from '../../Components/Shared/Components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    padding: theme.spacing(2, 0, 0, 0),
    backgroundImage: `url(${Spiral})`,
    boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.5)',
    backgroundSize: 'cover',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginTop: theme.spacing(0),
      padding: theme.spacing(1, 0, 0, 0),
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <NavBar appName="Sporty" />
      <TopBanner />
      <SecondBanner />
      <ThirdBanner />
      <Footer />
    </Container>
  );
};

export default HomePage;

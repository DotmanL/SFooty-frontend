import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import { Helmet } from 'react-helmet';
import Spiral from './assets/spiralbg.svg';
import TopBanner from '../../components/homePage/TopBanner';
import SecondBanner from '../../components/homePage/SecondBanner';
import ThirdBanner from '../../components/homePage/ThirdBanner';
import Footer from '../../components/shared/components/Footer';
import { NavBar } from '../../components/shared/components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'blue',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    padding: theme.spacing(2, 0, 0, 0),
    backgroundImage: `url(${Spiral})`,
    boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.5)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginTop: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
      width: '100%',
      backgroundSize: 'contain',
      backgroundRepeat: 'repeat',
      marginTop: theme.spacing(0),
      padding: theme.spacing(1, 0, 0, 0),
    },
  },
}));

const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Helmet>
        <title>Sporty</title>
      </Helmet>
      <NavBar isHomePage appName="Sporty" />
      <TopBanner />
      <SecondBanner />
      <ThirdBanner />
      <Footer />
    </Container>
  );
};

export default HomePage;

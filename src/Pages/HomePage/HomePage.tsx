import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';
import Spiral from './assets/spiralbg.svg';
import TopBanner from '../../Components/HomePage/TopBanner';
import SecondBanner from '../../Components/HomePage/SecondBanner';
import ThirdBanner from '../../Components/HomePage/ThirdBanner';
import Footer from '../../Components/Shared/Components/Footer';
import { NavBarHomePage } from '../../Components/Shared/Components/NavBarHomePage';

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
    [theme.breakpoints.down('sm')]: {
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
      <NavBarHomePage appName="Sporty" />
      <TopBanner />
      <SecondBanner />
      <ThirdBanner />
      <Footer />
    </Container>
  );
};

export default HomePage;

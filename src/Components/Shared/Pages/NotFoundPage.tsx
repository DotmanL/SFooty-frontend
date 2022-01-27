import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ErrImage from './assets/2456051.jpg';
// import ErrText from './assets/404.png';
import { Link } from '../Components/Link';
import { NavBar } from '../Components/NavBar';
import Footer from '../Components/Footer';

const useStyles = makeStyles((theme) => ({
  contentOffset: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
    // ...(theme.mixins.toolbar as CSSProperties),
    display: 'flex',
    height: 'auto',
    flexDirection: 'column',
    fontFamily: 'Sofia Pro',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(15),
      height: '100vh',
    },
  },
  title: {
    color: '#27AE60',
    fontSize: '72px',
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
  },
  credit: {
    marginTop: theme.spacing(12),
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: theme.spacing(-7),
    marginBottom: theme.spacing(-14),
    width: '700px',
    height: '700px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '70%',
    },
  },
  text: {
    alignSelf: 'center',
  },
  link: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 1px 0 0 currentColor',
    },
  },
  imageContainer: {},
  button: {
    background: '#27AE60',
    color: 'white',
    marginTop: theme.spacing(2),
    padding: '5px 35px 5px 35px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#27AE60',
    },
  },
  back: {
    fontStyle: 'normal',
    fontSize: theme.spacing(1.8),
  },
}));

export const NotFoundPage: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.contentOffset}>
        <NavBar appName="Sporty" />
        <img src={ErrImage} alt="404i" className={classes.image} />
        <a className={classes.credit} href="https://www.freepik.com/vectors/business">
          Business vector created by pikisuperstar - www.freepik.com
        </a>
        <Typography style={{ fontWeight: 'bold', textAlign: 'center' }} variant="h6">
          We can&apos;t find the page you are looking for.
        </Typography>
        <Link className={classes.link} to="/">
          <Button variant="contained" className={classes.button}>
            <Typography variant="h6" className={classes.back}>
              Go Home
            </Typography>
          </Button>
        </Link>
      </Container>
      <Footer />
    </>
  );
};

export default NotFoundPage;

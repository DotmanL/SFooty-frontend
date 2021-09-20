import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ReactComponent as ErrImage } from './assets/404Image.svg';
import ErrText from './assets/404.png';
import { Link } from '../Components/Link';
import { NavBar } from '../Components/NavBar';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: '40px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '20px',
    },
  },
  contentOffset: {
    marginTop: theme.spacing(8.9),
    ...(theme.mixins.toolbar as CSSProperties),
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    fontFamily: 'Sofia Pro',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2.7),
    },
  },
  title: {
    color: '#4E8579',
    fontSize: '72px',
    fontWeight: theme.typography.fontWeightLight,
    textAlign: 'center',
  },
  image: {
    alignSelf: 'center',
    marginTop: theme.spacing(-7),
    marginBottom: theme.spacing(-14),
    width: '100%',
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
    marginTop: theme.spacing(1),
    padding: '5px 35px 5px 35px',
    '&:hover': {
      backgroundColor: 'white',
      color: '#1C819E',
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
      <NavBar appName="Sporty" />
      <Container maxWidth="xl" className={classes.contentOffset}>
        <ErrImage alt="404 image" className={classes.image} />
        <Grid className={classes.text}>
          <img src={ErrText} alt="404" />
        </Grid>
        <Typography
          style={{ fontWeight: 'bold', textAlign: 'center' }}
          variant="h5"
        >
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
    </>
  );
};

export default NotFoundPage;

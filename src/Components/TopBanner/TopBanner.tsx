import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image';
import { Parallax } from 'react-parallax';
import crimage from './assets/crr.svg';
import Stadium from './assets/stadium-min.jpg';
import Logo from './assets/logo.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    boxShadow: 'inset 0 0 0 2000px rgba(39,174,96, 0.4)',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '60%',
    height: '100vh',
    padding: '10px 30px',
    zIndex: 9,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
      padding: '5px 20px',
    },
  },
  headerContainer: {
    height: '90px',
    width: 'auto',
    // background: 'red',
    marginLeft: theme.spacing(-1),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(-3),
    },
  },
  appLogo: {
    marginTop: '15px',
    height: '70px',
    width: '90px',
  },
  header: {
    display: 'flex',
    marginLeft: theme.spacing(0),
    color: 'white',
    fontSize: '48px',
    fontFamily: 'Montserrat',
    marginTop: theme.spacing(2),
    fontWeight: 950,
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      marginTop: theme.spacing(3),
    },
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '40%',
    height: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  image: {
    width: '100%',
    height: '95%',
    marginTop: theme.spacing(4),
    marginLeft: '-100px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '-130px',
      marginLeft: '-60px',
    },
  },
  introText: {
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: '80px',
    fontWeight: 900,
    color: 'white',
    width: '90%',
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(13),
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: '40px',
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(0),
    },
  },
  buttonsContainer: {
    marginTop: theme.spacing(8),
    width: 'auto',
    display: 'flex',
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(10),
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      width: '100%',
      justifyContent: 'space-between',
      padding: '0px 10px',
    },
  },
  button: {
    color: theme.palette.background.default,
    background: theme.palette.primary.main,
    width: '220px',
    height: '72px',
    fontSize: '24px',
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '52px',
      fontSize: '16px',
      padding: '0px',
    },
  },
  button2: {
    color: theme.palette.primary.main,
    background: theme.palette.background.default,
    width: '220px',
    height: '72px',
    border: '2px solid',
    marginLeft: '20px',
    fontSize: '24px',
    [theme.breakpoints.down('sm')]: {
      width: '150px',
      height: '52px',
      fontSize: '16px',
      marginLeft: '5px',
      padding: '0px',
    },
  },
  secondBanner: {
    height: '700px',
    display: 'flex',
    background: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: theme.spacing(2),
  },
}));

const TopBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Parallax
        blur={1}
        bgImage={`${Stadium}`}
        bgImageAlt="the cat"
        strength={1500}
      >
        <Grid className={classes.main}>
          <Grid className={classes.textContainer}>
            <Grid className={classes.headerContainer}>
              <img className={classes.appLogo} src={Logo} alt="app-logo" />
              <Typography className={classes.header} variant="h1">
                Sporty
              </Typography>
            </Grid>
            <Typography className={classes.introText} variant="h2">
              Football is all we do at sporty
            </Typography>
            <Grid className={classes.buttonsContainer}>
              <Button variant="contained" className={classes.button}>
                Sign Up
              </Button>
              <Button className={classes.button2}>Log in</Button>
            </Grid>
          </Grid>
          <Grid className={classes.imageContainer}>
            <Image
              color="transparent"
              className={classes.image}
              src={crimage}
              alt="cr7"
            />
          </Grid>
        </Grid>
        <Grid className={classes.secondBanner}>
          <Typography>what we do</Typography>
        </Grid>
      </Parallax>
    </>
  );
};

export default TopBanner;

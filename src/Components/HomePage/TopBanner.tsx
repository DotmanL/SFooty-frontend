import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import BlueStar from './assets/blueStar.svg';
import PL from './assets/pl.png';
import LaLiga from './assets/laliga2.png';
import BundesLiga from './assets/bliga.png';
import Ligue1 from './assets/ligue1.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'purple',
    alignItems: 'center',
    marginTop: '90px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  firstEmojiC: {
    display: 'flex',
    width: '100%',
    // position: 'relative',
    // background: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(13),
    padding: theme.spacing(2, 9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-2.5),
      padding: theme.spacing(2, 2),
    },
  },

  imagePl: {
    width: '180px',
    height: '180px',
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.down('sm')]: {
      width: '60px',
      height: '60px',
      marginTop: theme.spacing(0.5),
    },
  },

  imageLl: {
    width: '140px',
    height: '190px',
    marginTop: theme.spacing(-2.5),
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '70px',
      marginTop: theme.spacing(-2.4),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    // background: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(-8),
    padding: '5px 30px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(-5),
      height: 'auto',
      padding: '5px 20px',
    },
  },
  introText: {
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(6.4),
    fontWeight: 900,
    textAlign: 'center',
    color: theme.palette.primary.main,
    width: '45%',
    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      fontSize: theme.spacing(1.8),
    },
  },
  subText: {
    fontSize: theme.spacing(2.4),
    fontWeight: 800,
    color: 'black',
    textAlign: 'center',
    width: '60%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontWeight: 500,
      fontSize: theme.spacing(1.4),
      marginTop: theme.spacing(1),
    },
  },
  button: {
    color: theme.palette.background.default,
    background: theme.palette.primary.main,
    width: 'auto',
    height: 'auto',
    padding: theme.spacing(1.5, 4),
    fontSize: theme.spacing(1.8),
    borderRadius: '10px',
    marginTop: theme.spacing(3),
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2.5),
      fontSize: theme.spacing(1.6),
    },
  },
  secondEmojiC: {
    display: 'flex',
    width: '100%',
    // position: 'relative',
    // background: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(2, 9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2, 4),
    },
  },

  imageBliga: {
    width: '150px',
    height: '150px',
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      width: '60px',
      height: '60px',
      marginTop: theme.spacing(3.5),
    },
  },

  imageLigue1: {
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      width: '75px',
      height: '65px',
      marginTop: theme.spacing(1),
    },
  },
}));

const TopBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.firstEmojiC}>
          <img className={classes.imagePl} src={PL} alt="pl" />

          <img className={classes.imageLl} src={LaLiga} alt="Laliga" />
        </Grid>
        <Grid className={classes.textContainer}>
          <Typography className={classes.introText} variant="h2">
            Sport is all we do at sporty
          </Typography>
          <Typography className={classes.subText} variant="h4">
            Sporty connects everyone who loves football together to chat, banter
            your friends and know what is trending.
          </Typography>
          <Button className={classes.button}>Join Now</Button>
        </Grid>
        <Grid className={classes.secondEmojiC}>
          <img className={classes.imageBliga} src={BundesLiga} alt="Biga" />

          <img className={classes.imageLigue1} src={Ligue1} alt="Ligue1" />
        </Grid>
      </Grid>
    </>
  );
};

export default TopBanner;

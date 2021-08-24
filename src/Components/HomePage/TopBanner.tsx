import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import BlueStar from './assets/blueStar.svg';
import YellowStar from './assets/yellowStar.svg';
import RedPolygon from './assets/redpolygon.svg';
import OrangePolygon from './assets/orangePolygon.svg';
import PL from './assets/pl.png';
import LaLiga from './assets/laliga2.png';
import BundesLiga from './assets/bliga.png';
import Ligue1 from './assets/ligue1.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
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
    // background: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(13),
    padding: theme.spacing(2, 9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-2.5),
      padding: theme.spacing(2, 0.2),
    },
  },
  firstEmoji: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '70px',
      fontSize: theme.spacing(1.8),
    },
  },
  imagePl: {
    position: 'absolute',
    width: '180px',
    height: '180px',
    marginLeft: theme.spacing(2.3),
    marginTop: theme.spacing(2),
    zIndex: 5,
    [theme.breakpoints.down('sm')]: {
      width: '60px',
      height: '60px',
      marginLeft: theme.spacing(1.2),
      marginTop: theme.spacing(1),
    },
  },
  secondEmoji: {
    position: 'relative',
  },
  image2: {
    position: 'absolute',
    marginTop: theme.spacing(-5),
    zIndex: -5,
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '70px',
      marginTop: theme.spacing(-2),
      fontSize: theme.spacing(1.8),
    },
  },
  imageLl: {
    position: 'relative',
    width: '140px',
    height: '180px',
    marginLeft: theme.spacing(5.5),
    marginTop: theme.spacing(-2.5),
    [theme.breakpoints.down('sm')]: {
      width: '60px',
      height: '60px',
      marginLeft: theme.spacing(1.2),
      marginTop: theme.spacing(-3),
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
    padding: theme.spacing(2, 7),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(2, 0.2),
    },
  },
  thirdEmoji: {
    position: 'relative',
  },
  image3: {
    position: 'absolute',
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '70px',
      marginTop: theme.spacing(3),
      fontSize: theme.spacing(1.8),
    },
  },
  imageBliga: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    zIndex: 5,
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      width: '60px',
      height: '60px',
      marginTop: theme.spacing(3.5),
      marginLeft: theme.spacing(1.2),
    },
  },
  fourthEmoji: {
    position: 'relative',
  },
  image4: {
    position: 'absolute',
    marginTop: theme.spacing(-5),
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '70px',
      zIndex: -5,
      marginTop: theme.spacing(-2),
    },
  },
  imageLigue1: {
    position: 'relative',
    width: '200px',
    height: '200px',
    marginTop: theme.spacing(0),
    marginLeft: theme.spacing(5),
    zIndex: 5,
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '50px',
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(2),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
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
      width: '60%',
      fontWeight: 700,
      fontSize: theme.spacing(2.4),
    },
  },
  subText: {
    fontSize: theme.spacing(2.4),
    fontWeight: 800,
    color: 'black',
    textAlign: 'center',
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      fontSize: theme.spacing(1.6),
      marginTop: theme.spacing(1.5),
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
    marginTop: theme.spacing(2),
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 2.5),
      fontSize: theme.spacing(1.6),
    },
  },
}));

const TopBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.firstEmojiC}>
          <Grid className={classes.firstEmoji}>
            <img className={classes.image} src={RedPolygon} alt="redP" />
            <img className={classes.imagePl} src={PL} alt="pl" />
          </Grid>
          <Grid className={classes.secondEmoji}>
            <img className={classes.image2} src={BlueStar} alt="blueS" />
            <img className={classes.imageLl} src={LaLiga} alt="Laliga" />
          </Grid>
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
          <Grid className={classes.thirdEmoji}>
            <img
              className={classes.image3}
              src={OrangePolygon}
              alt="orangePolygon"
            />
            <img className={classes.imageBliga} src={BundesLiga} alt="Biga" />
          </Grid>

          <Grid className={classes.fourthEmoji}>
            <img className={classes.image4} src={YellowStar} alt="yellowStar" />
            <img className={classes.imageLigue1} src={Ligue1} alt="Ligue1" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default TopBanner;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import BluePolygon from './assets/bluePolygon.svg';
import RedPolygon from './assets/redPolyygon.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    height: 'auto',
    // background: 'yellow',
    // borderTop: '2px solid red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(4),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // background: 'red',
  },
  introText: {
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(6.4),
    fontWeight: 900,
    textAlign: 'center',
    // background: 'purple',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      fontSize: theme.spacing(1.8),
      // marginLeft: theme.spacing(3),
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
      fontWeight: 500,
      width: '70%',
      fontSize: theme.spacing(1.4),
      marginTop: theme.spacing(0.7),
    },
  },
  polygonContainer: {
    display: 'flex',
    flexDirection: 'row',
    // background: 'purple',
    width: '100%',
    justifyContent: 'space-between',
  },
  leftPolygon: {
    display: 'flex',
    marginTop: theme.spacing(-10),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-10),
    },
  },
  bluePolygon: {
    marginTop: theme.spacing(6),
    width: '130px',
    height: '195px',
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '45px',
    },
  },
  rightPolygon: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(-9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-11),
    },
  },
  redPolygon: {
    width: '130px',
    height: '195px',
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '45px',
    },
  },
}));

const SecondBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.textContainer}>
          <Typography className={classes.introText} variant="h2">
            Get to know us.
          </Typography>
          <Typography className={classes.subText} variant="h4">
            Sporty is a social media site, and its primary purpose is to connect
            people and allow people to share their thoughts on football with a
            big audience.
          </Typography>
        </Grid>

        <Grid className={classes.polygonContainer}>
          <Grid className={classes.leftPolygon}>
            <img
              className={classes.bluePolygon}
              src={BluePolygon}
              alt="blueP"
            />
          </Grid>
          <Grid className={classes.rightPolygon}>
            <img className={classes.redPolygon} src={RedPolygon} alt="redP" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondBanner;

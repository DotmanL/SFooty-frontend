import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import GoalPost from './assets/goalPost.png';
import Football from './assets/balll.png';

const useStyles = makeStyles((theme) => ({
  main: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0),
    marginTop: theme.spacing(9),
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
  },
  introText: {
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(6.4),
    fontWeight: 900,
    textAlign: 'center',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      fontSize: theme.spacing(1.8),
    },
  },
  subText: {
    fontSize: theme.spacing(2.4),
    fontWeight: 600,
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
    width: '100%',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 0, 0, 0),
  },
  leftPolygon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-10),
    },
  },
  football: {
    marginTop: theme.spacing(-10),
    marginLeft: theme.spacing(-2),
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(7),
      marginLeft: theme.spacing(-1.6),
      width: '90px',
      height: '90px',
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
    width: '250px',
    height: '195px',
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '55px',
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
            <img className={classes.football} src={Football} alt="football" />
          </Grid>
          <Grid className={classes.rightPolygon}>
            <img className={classes.redPolygon} src={GoalPost} alt="redP" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default SecondBanner;

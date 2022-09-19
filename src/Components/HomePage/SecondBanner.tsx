import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import GoalPost from './assets/goalPost.png';
import Football from './assets/balll.png';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '2px solid red',
    padding: theme.spacing(3, 1),
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing(-2),
      padding: theme.spacing(1, 0.5),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    display: 'flex',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(6.4),
    fontWeight: 750,
    textAlign: 'center',
    marginTop: theme.spacing(5),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(0),
      fontWeight: 600,
      fontSize: theme.spacing(1.8),
    },
  },
  subText: {
    fontSize: theme.spacing(2.4),
    fontWeight: 500,
    lineHeight: '30px',
    color: 'black',
    textAlign: 'center',
    width: '40%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      fontWeight: 500,
      lineHeight: '20px',
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
    marginTop: theme.spacing(-5),
    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-2),
    },
  },
  leftPolygon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-10),
    },
  },
  football: {
    marginTop: theme.spacing(-10),
    marginLeft: theme.spacing(-2),
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-11),
    },
  },
  redPolygon: {
    width: '250px',
    height: '195px',
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
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
            What&#39;s sporty all about?
          </Typography>
          <Typography className={classes.subText} variant="h4">
            Sporty is a social media site, and its primary purpose is to connect people and allow
            people to share their thoughts on football with a big audience.
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

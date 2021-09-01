import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Lspiral from './assets/lspiral.svg';
import YellowPolygon from './assets/yellowPolygon.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0),
    marginTop: theme.spacing(-3),
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
    width: '60%',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontWeight: 700,
      fontSize: theme.spacing(1.8),
    },
  },
  subText: {
    fontSize: theme.spacing(2.4),
    fontWeight: 550,
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
  lSpiral: {
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
  yellowPolygon: {
    width: '130px',
    height: '195px',
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      width: '50px',
      height: '45px',
    },
  },
}));

const ThirdBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.textContainer}>
          <Typography className={classes.introText} variant="h2">
            We’re Here To Make Your Life Easier.
          </Typography>
          <Typography className={classes.subText} variant="h4">
            We created Sporty because we want to help football fans connect all
            over the world.
          </Typography>
        </Grid>

        <Grid className={classes.polygonContainer}>
          <Grid className={classes.leftPolygon}>
            <img className={classes.lSpiral} src={Lspiral} alt="football" />
          </Grid>
          <Grid className={classes.rightPolygon}>
            <img
              className={classes.yellowPolygon}
              src={YellowPolygon}
              alt="redP"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ThirdBanner;

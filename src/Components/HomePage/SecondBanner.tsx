import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fans from './assets/fans.svg';
import World from './assets/world.svg';

const useStyles = makeStyles((theme) => ({
  main: {
    height: 'auto',
    background: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px 10px',
    fontSize: theme.spacing(2),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0px 0px',
      marginBottom: theme.spacing(3),
    },
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '70px 30% 30% 50% / 60% 40% 60% 40%',
    background: 'rgba(39,174,96, 0.3)',
    marginTop: theme.spacing(12),
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: theme.spacing(4),
      display: 'flex',
    },
  },
  fans: {
    display: 'flex',
    width: '85%',
    height: '90%',
    [theme.breakpoints.down('sm')]: {},
  },
  textContainer: {
    width: '50%',
    padding: '20px 20px',
    display: 'flex',
    flexDirection: 'column',
    // background: 'red',
    alignItems: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '10px 10px',
      marginTop: '0px',
      alignItems: 'center',
    },
  },
  text1: {
    color: 'black',
    fontSize: theme.spacing(4.5),
    fontWeight: 600,
    width: '96%',
    textAlign: 'left',
    fontFamily: 'Montserrat',
    [theme.breakpoints.down('sm')]: {
      width: '96%',
      textAlign: 'center',
      marginTop: theme.spacing(2),
      fontSize: theme.spacing(2),
    },
  },
  world: {
    width: '85%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      width: '98%',
      marginTop: theme.spacing(5),
    },
  },
}));

const SecondBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.textContainer}>
          <Typography variant="h1" className={classes.text1}>
            Fans Relive Moments On The Go With Friends All Over The World
          </Typography>
          <img className={classes.world} src={World} alt="world" />
        </Grid>
        <Grid className={classes.imageContainer}>
          <img className={classes.fans} src={Fans} alt="fans" />
        </Grid>
      </Grid>
    </>
  );
};

export default SecondBanner;

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    height: 'auto',
    // background: 'white',
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
}));

const SecondBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Typography>ok</Typography>
      </Grid>
    </>
  );
};

export default SecondBanner;

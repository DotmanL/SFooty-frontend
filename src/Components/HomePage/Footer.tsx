import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from '../Shared/Link';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(10),
    background: theme.palette.primary.main,
    color: 'white',
    height: '400px',
    padding: theme.spacing(2, 9),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(7),
      padding: theme.spacing(2, 2, 1, 2),
      flexDirection: 'column',
      justifyContent: 'flex-start',
    },
  },
  firstColumn: {
    fontWeight: 800,
    // background: 'red',
    marginTop: theme.spacing(9),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(1, 0, 2, 0),
    },
  },
  title: {
    fontWeight: 800,
  },
  headers: {
    fontWeight: theme.typography.fontWeightMedium,
    margin: theme.spacing(0, 0, 0, 0),
  },
  otherColumns: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0, 0, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2, 0, 0, 0),
    },
  },
  links: {
    margin: theme.spacing(1, 0, 1, 0),
    fontWeight: 500,
    fontSize: '30px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '24px',
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.main}>
        <Grid className={classes.firstColumn}>
          <Typography className={classes.title} variant="h2">
            Sporty
          </Typography>
        </Grid>
        <Grid className={classes.otherColumns}>
          <Typography className={classes.headers} variant="h4">
            Company
          </Typography>
          <Link className={classes.links} to="/aboutus">
            About us
          </Link>

          {/* Change links */}
          <Link className={classes.links} to="/" variant="h4">
            FAQs
          </Link>
        </Grid>
        <Grid className={classes.otherColumns}>
          <Typography className={classes.headers} variant="h4">
            Get in touch
          </Typography>
          {/* Change links */}
          <Link className={classes.links} to="/" variant="h4">
            Contact us
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;

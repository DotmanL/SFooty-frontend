import React from 'react';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { Link } from './Link';
import Spiral from './assets/spiralfooter.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    color: 'white',
    width: '100%',
    height: '400px',
    padding: theme.spacing(10, 0, 0, 6),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3, 0, 2, 2),
      flexDirection: 'row',
      bottom: 0,
      left: 0,
    },
  },
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: theme.palette.primary.main,
    color: 'white',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      bottom: 0,
      left: 0,
    },
  },
  firstColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    // fontWeight: theme.typography.fontWeightBold,
    fontWeight: 900,
    fontSize: theme.spacing(4.8),
    justifySelf: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(0),
      fontSize: theme.spacing(3.2),
    },
  },
  headers: {
    fontSize: theme.spacing(3.2),
    fontWeight: 600,
    // fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  otherColumns: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {},
  },
  links: {
    margin: theme.spacing(1, 0, 1, 0),
    fontWeight: 500,
    fontSize: theme.spacing(2.8),
    color: theme.palette.background.default,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2.0),
    },
  },
  spiralContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  spiralDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  spiralImage: {
    [theme.breakpoints.down('md')]: {
      width: theme.spacing(10),
      height: theme.spacing(15),
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid className={classes.main}>
          <Grid className={classes.firstColumn}>
            <Typography className={classes.title} variant="h2">
              Sporty
            </Typography>
          </Grid>
          <Grid className={classes.otherColumns}>
            <Typography className={classes.headers} variant="h3">
              Company
            </Typography>
            <Link className={classes.links} to="/aboutus">
              About us
            </Link>

            {/* Change links */}
            <Link className={classes.links} to="/faq">
              FAQs
            </Link>
          </Grid>
          <Grid className={classes.otherColumns}>
            <Typography className={classes.headers} variant="h4">
              Get in touch
            </Typography>
            {/* Change links */}
            <Link className={classes.links} to="/contact-us">
              Contact us
            </Link>
          </Grid>
        </Grid>
        <Grid className={classes.spiralContainer}>
          <Grid className={classes.spiralDiv}>
            <img src={Spiral} className={classes.spiralImage} alt="spiralanchor" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;

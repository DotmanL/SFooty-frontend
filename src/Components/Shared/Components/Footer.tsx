import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Link } from './Link';
// import Footer from

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    background: theme.palette.primary.main,
    color: 'white',
    height: '400px',
    padding: theme.spacing(3, 6),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(0, 0, 2, 2),
      flexDirection: 'column',
    },
  },
  firstColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.spacing(4.8),
    justifySelf: 'center',
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(0),
      fontSize: theme.spacing(3.2),
    },
  },
  headers: {
    fontSize: theme.spacing(3.2),
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  otherColumns: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {},
  },
  links: {
    margin: theme.spacing(1, 0, 1, 0),
    fontWeight: 500,
    fontSize: theme.spacing(2.8),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.0),
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.main}>
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
      </Container>
    </>
  );
};

export default Footer;

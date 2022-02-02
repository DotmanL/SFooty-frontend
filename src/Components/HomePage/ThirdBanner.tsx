import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Lspiral from './assets/lspiral.svg';
import YellowPolygon from './assets/yellowPolygon.svg';
import Email from './assets/email.svg';
import Instagram from './assets/instagram.svg';
import Twitter from './assets/twitter.svg';
import { Link } from '../Shared/Components/Link';

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
      marginTop: theme.spacing(2),
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
    flexDirection: 'column',
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
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    textAlign: 'center',
    lineHeight: '30px',
    // width: '60%',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontWeight: 500,
      width: 'auto',
      lineHeight: '20px',
      fontSize: theme.spacing(1.4),
      marginTop: theme.spacing(0),
    },
  },
  polygonContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
    },
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
  contactContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // background: 'red',
    marginTop: theme.spacing(-18),
    marginBottom: theme.spacing(7),
    padding: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-7),
      marginBottom: theme.spacing(0),
    },
  },
  contactButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: theme.spacing(2, 4),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  socialMedia: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  contactButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    background: theme.palette.primary.main,
    padding: theme.spacing(1.2, 2.5),
    borderRadius: theme.spacing(1.5),
    margin: theme.spacing(0.5, 0.5),
    color: theme.palette.background.default,
    fontWeight: theme.typography.fontWeightMedium,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1, 1.5),
      borderRadius: theme.spacing(1.2),
    },
  },
  buttonText: {
    fontSize: theme.spacing(2.4),
    color: 'white',
    fontWeight: theme.typography.fontWeightLight,
    margin: theme.spacing(0, 1),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.6),
    },
  },
  socialImage: {
    [theme.breakpoints.down('sm')]: {
      width: '20px',
      height: '20px',
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
            We’re Here To
            <div> Make Your Life Easier.</div>
          </Typography>
          <Typography className={classes.subText} variant="h4">
            We created Sporty because we want
            <div>to help football fans connect all over the</div>
            <div>world.</div>
          </Typography>
        </Grid>

        <Grid className={classes.polygonContainer}>
          <Grid className={classes.leftPolygon}>
            <img className={classes.lSpiral} src={Lspiral} alt="football" />
          </Grid>
          <Grid className={classes.rightPolygon}>
            <img className={classes.yellowPolygon} src={YellowPolygon} alt="redP" />
          </Grid>
        </Grid>
        <Grid className={classes.contactContainer}>
          <Typography className={classes.introText} variant="h2">
            Say Hi
          </Typography>
          <Typography className={classes.subText} variant="h4">
            We’ll be happy to answer all your questions or
            <div>inquiries, feel free to say Hello.</div>
          </Typography>
          <Grid className={classes.contactButtonsContainer}>
            <Grid className={classes.contactButton}>
              <img className={classes.socialImage} src={Email} alt="Email" />
              <Link to="/email-link" className={classes.buttonText}>
                Email
              </Link>
            </Grid>
            <Grid className={classes.socialMedia}>
              <Grid className={classes.contactButton}>
                <img className={classes.socialImage} src={Instagram} alt="Instagram" />
                <Link to="/instagram" className={classes.buttonText} variant="h5">
                  Instagram
                </Link>
              </Grid>
              <Grid className={classes.contactButton}>
                <img className={classes.socialImage} src={Twitter} alt="Twitter" />
                <Link to="/twitter" className={classes.buttonText} variant="h5">
                  Twitter
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ThirdBanner;

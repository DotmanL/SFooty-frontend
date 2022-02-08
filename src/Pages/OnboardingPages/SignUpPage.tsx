import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SignUpForm } from '../../Components/Onboarding/SignUpForm';
import { NavBar } from '../../Components/Shared/Components/NavBar';
import Footer from '../../Components/Shared/Components/Footer';
import ScatteredFields from './assets/scattered-forcefields.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 0, 0),
    backgroundImage: `url(${ScatteredFields})`,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      backgroundSize: 'contain',
    },
  },
  signUpContainer: {
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
}));

const SignUpPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Helmet>
        <title>Sign Up - Sporty</title>
      </Helmet>
      <NavBar appName="Sporty" />
      <Grid className={classes.signUpContainer}>
        <SignUpForm isSubmitting={false} />
      </Grid>
      <Footer />
    </Container>
  );
};

export default SignUpPage;

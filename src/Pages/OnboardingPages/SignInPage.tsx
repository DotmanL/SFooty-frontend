import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';
import { SignInForm } from '../../Components/Onboarding/SignInForm';
import { NavBar } from '../../Components/Shared/Components/NavBar';
import Footer from '../../Components/Shared/Components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
}));

const SignInPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Helmet>
        <title>Sign In - Sporty</title>
      </Helmet>
      <NavBar appName="Sporty" />
      <SignInForm isSubmitting={false} />
      <Footer />
    </Container>
  );
};

export default SignInPage;

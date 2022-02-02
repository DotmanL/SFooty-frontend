import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { SignUpForm } from '../../Components/Onboarding/SignUpForm';
import { NavBar } from '../../Components/Shared/Components/NavBar';
import Footer from '../../Components/Shared/Components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
}));

const SignUpPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <NavBar appName="Sporty" />
      <SignUpForm isSubmitting={false} />
      <Footer />
    </Container>
  );
};

export default SignUpPage;

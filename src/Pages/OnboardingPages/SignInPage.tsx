import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import { Helmet } from 'react-helmet';
import { SignInForm } from '../../components/onboarding/SignInForm';
import { NavBar } from '../../components/shared/components/NavBar';
import Footer from '../../components/shared/components/Footer';
import ScatteredFields from './assets/scattered-forcefields.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 0, 0),
    backgroundImage: `url(${ScatteredFields})`,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      backgroundSize: 'contain',
    },
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

import React from 'react';
import Grid from '@mui/material/Grid';
import { Helmet } from 'react-helmet';
import makeStyles from '@mui/styles/makeStyles';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import { SignUpForm, SignUpFormData } from '../../components/onboarding/SignUpForm';
import { NavBar } from '../../components/shared/components/NavBar';
import Footer from '../../components/shared/components/Footer';
import ScatteredFields from './assets/scattered-forcefields.svg';
import users from '../../components/api/users';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 0, 0),
    backgroundImage: `url(${ScatteredFields})`,
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      backgroundSize: 'contain',
    },
  },
  signUpContainer: {
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10),
    },
  },
}));

const onFormSubmitted = async (formData: SignUpFormData) => {
  try {
    await users.apiClient.post<SignUpFormData>('/api/users/signup', formData);
    toast.success('Account Created');
  } catch (err: any) {
    const { errors } = err.response.data;
    if (errors) {
      errors.map((error: any) => toast.error(error.msg));
    }
  }
};

const SignUpPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.root}>
      <Helmet>
        <title>Sign Up - Sporty</title>
      </Helmet>
      <NavBar appName="Sporty" />
      <Grid className={classes.signUpContainer}>
        <SignUpForm isSubmitting={false} onFormSubmitted={onFormSubmitted} visible />
      </Grid>
      <Footer />
    </Container>
  );
};

export default SignUpPage;

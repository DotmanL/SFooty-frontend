import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { toast } from 'react-toastify';
import { SignUpForm, SignUpFormData } from '../../Components/Onboarding/SignUpForm';
import { NavBar } from '../../Components/Shared/Components/NavBar';
import Footer from '../../Components/Shared/Components/Footer';
import ScatteredFields from './assets/scattered-forcefields.svg';
import users from '../../Components/api/users';

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

import React from 'react';
// import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignUpForm from '../../Components/Onboarding/SignUpForm';

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
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;

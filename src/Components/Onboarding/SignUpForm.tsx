/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';
import * as yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import { Container } from '@material-ui/core';
// import { useQuery } from 'react-query';
import { InputTextField } from '../Shared/Components/InputTextField';
import { Link } from '../Shared/Components/Link';
// import FootballApi from '../api/FootballService';
// import { Teams } from '../api/types';
import { data } from '../api/englishclubs';
import Spinner from '../Shared/Components/Spinner';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    minHeight: '100vh',
    padding: theme.spacing(0),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(2.5, 0, 2, 0),
      padding: theme.spacing(0, 2),
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minHeight: '100vh',
    },
    // [theme.breakpoints.down('md')]: {
    //   padding: theme.spacing(0, 10),
    // },
  },
  formMain: {
    padding: theme.spacing(2.5, 5),
    borderRadius: '15px',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    width: 'auto',
    backgroundColor: 'white',
    marginTop: '0px',
    [theme.breakpoints.down('sm')]: {
      width: '98%',
      padding: theme.spacing(1.5, 1.5),
      border: '0.5px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  header: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3.6),
    marginTop: theme.spacing(0),
    // fontWeight: theme.typography.fontWeightBold,
    fontWeight: 900,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // background: 'yellow',
    padding: theme.spacing(0, 0),
  },
  formControl: {
    marginTop: theme.spacing(1.5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  terms: {
    fontSize: theme.spacing(2.0),
    marginTop: theme.spacing(1.5),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.6),
    },
  },
  links: {
    fontSize: theme.spacing(2.0),
    color: theme.palette.primary.main,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.6),
    },
  },
  button: {
    background: theme.palette.primary.main,
    width: '90%',
    color: 'white',
    marginTop: theme.spacing(2),
    alignSelf: 'center',
    borderRadius: '20px',
    // fontWeight: theme.typography.fontWeightMedium,
    fontWeight: 600,
    fontSize: theme.spacing(2.4),
    padding: theme.spacing(0.5, 0.5),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(1.5),
      fontSize: theme.spacing(2.0),
      padding: theme.spacing(2, 2),
      height: '40px',
      width: '60%',
    },
  },
}));

const validationSchema = yup.object().shape({
  userName: yup.string().required('User Name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  club: yup.string().required('Club selection is required'),
  // confirmPassword: yup
  //   .string()
  //   .oneOf([yup.ref('password'), null], 'The passwords you entered do not match')
  //   .required(''),
});

export interface SignUpFormData {
  userName: string;
  email: string;
  password: string;
  club: string;
  // confirmPassword: string;
}

interface SignUpFormProps {
  visible?: boolean;
  isSubmitting?: boolean;
  onFormSubmitted: (formData: SignUpFormData) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({
  visible,
  isSubmitting,
  onFormSubmitted,
}) => {
  const initialValues = {
    userName: '',
    email: '',
    password: '',
    club: '',
    // confirmPassword: '',
  };

  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setConfirmPassword(e.target.value);
  // };

  const handleSubmit = useCallback(
    (values: SignUpFormData, formik: FormikHelpers<SignUpFormData>) => {
      onFormSubmitted(values);
      formik.setSubmitting(false); // prevent fields from disabling
    },
    [onFormSubmitted]
  );

  const classes = useStyles();
  // const { isLoading, error, data } =
  // useQuery<Teams[], Error>('getTeams', async () => FootballApi.findAll());

  // if (isLoading) {
  //   return <p>Loading....</p>;
  // }
  // if (error) {
  //   return <p>{(error as Error)?.message}</p>;
  // }

  if (!visible) {
    return null;
  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          errors, touched, values, handleChange,
        }): React.ReactNode => (
          <Container className={classes.main}>
            <Paper elevation={4} className={classes.formMain}>
              <Typography variant="h2" className={classes.header}>
                Create an account
              </Typography>
              <Form className={classes.formContainer}>
                <Field
                  className={classes.formControl}
                  variant="outlined"
                  id="userName"
                  name="userName"
                  label="User Name"
                  component={InputTextField}
                  value={values.userName}
                  onChange={handleChange}
                  error={touched.userName && Boolean(errors.userName)}
                  helperText={touched.userName && errors.userName}
                />

                <Field
                  className={classes.formControl}
                  variant="outlined"
                  id="email"
                  type="email"
                  name="email"
                  label="Email"
                  component={InputTextField}
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  className={classes.formControl}
                  variant="outlined"
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  autoComplete="on"
                  component={InputTextField}
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                {/* <Field
                  className={classes.formControl}
                  variant="outlined"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="on"
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  component={InputTextField}
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  error={values.password !== confirmPassword}
                /> */}
                <Field
                  className={classes.formControl}
                  variant="outlined"
                  // shrink="false"
                  select
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                      transformOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                      },
                      getContentAnchorEl: null,
                    },
                  }}
                  id="club"
                  name="club"
                  label="Select your club"
                  component={InputTextField}
                  value={values.club}
                  onChange={handleChange}
                  error={touched.club && Boolean(errors.club)}
                  helperText={touched.club && errors.club}
                >
                  {data?.map((teams) => (
                    <MenuItem key={teams?.team?.id} value={teams?.team?.name}>
                      {teams?.team?.name}
                    </MenuItem>
                  ))}
                </Field>
                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                >
                  <Typography className={classes.terms} variant="h5">
                    I agree with the
                    <Link className={classes.links} to="/terms">
                      {' '}
                      Terms & Conditions
                      {' '}
                    </Link>
                  </Typography>
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                >
                  <Typography className={classes.terms} variant="h5">
                    Already have an account?
                    <Link className={classes.links} to="/signin">
                      {' '}
                      Sign In
                      {' '}
                    </Link>
                  </Typography>
                </Grid>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="contained"
                  className={classes.button}
                >
                  Sign Up
                </Button>
                {isSubmitting && <Spinner />}
              </Form>
            </Paper>
          </Container>
        )}
      </Formik>
    </>
  );
};

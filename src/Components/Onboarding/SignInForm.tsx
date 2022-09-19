import React from 'react';
// import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import {
  Formik, Form, Field, FormikHelpers,
} from 'formik';
import * as yup from 'yup';
import { Container } from '@mui/material';
import { InputTextField } from '../shared/components/InputTextField';
import TextField from '@mui/material/TextField';
import { Link } from '../shared/components/Link';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    minHeight: '100vh',
    padding: theme.spacing(0),
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(1.5, 0, 2, 0),
      display: 'flex',
      padding: theme.spacing(0, 2),
      flexDirection: 'column',
      minHeight: '100vh',
    },
  },
  formMain: {
    padding: theme.spacing(6, 5),
    borderRadius: '15px',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    width: 'auto',
    backgroundColor: 'white',
    marginTop: '0px',
    [theme.breakpoints.down('md')]: {
      width: '98%',
      padding: theme.spacing(4, 4),
      border: '0.5px solid',
      borderColor: theme.palette.primary.main,
    },
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3.6),
    marginTop: theme.spacing(0),
    // fontWeight: theme.typography.fontWeightBold,
    fontWeight: 900,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    // background: 'yellow',
    padding: theme.spacing(0, 0),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(1),
    },
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
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(1.6),
    },
  },
  links: {
    fontSize: theme.spacing(2.0),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2.0),
      marginTop: theme.spacing(1.5),
      padding: theme.spacing(2, 2),
      height: '40px',
      width: '60%',
    },
  },
}));

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export interface SignInFormData {
  email: string;
  password: string;
}

interface SignInFormProps {
  // visible: boolean;
  isSubmitting?: boolean;
  // onFormSubmitted: (data: SignUpFormData) => any;
}

export const SignInForm: React.FC<SignInFormProps> = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: SignInFormData, formik: FormikHelpers<SignInFormData>) => {
    formik.setSubmitting(false);
    // prevent fields from disabling
  };
  const classes = useStyles();
  // if (!visible) {
  //   return null;
  // }
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          errors, touched, isSubmitting, values, handleChange,
        }): React.ReactNode => (
          <Container className={classes.main}>
            <Paper elevation={4} className={classes.formMain}>
              <Typography variant="h2" className={classes.header}>
                Sign in to Sporty
              </Typography>
              <Form className={classes.formContainer}>
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
                  component={TextField}
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />

                <Grid
                  item
                  xs={12}
                  style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
                >
                  <Typography className={classes.terms} variant="h5">
                    New to Sporty?
                    <Link className={classes.links} to="/signup">
                      {' '}
                      Sign Up
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
                  Sign In
                </Button>
              </Form>
            </Paper>
          </Container>
        )}
      </Formik>
    </>
  );
};

import React from 'react';
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
import { InputTextField } from '../Shared/Components/InputTextField';
import { Link } from '../Shared/Components/Link';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    // background: 'red',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(7, 10, 2, 10),
    padding: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(7, 0, 2, 0),
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  },
  formMain: {
    padding: theme.spacing(5, 5),
    borderRadius: '15px',
    width: 'auto',
    // backgroundColor: 'whitesmoke',
    // [theme.breakpoints.down('xl')]: {
    //   width: 'sut',
    // },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      borderRadius: '0px',
      padding: theme.spacing(2, 2),
    },
  },
  header: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3.6),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2.8),
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
    fontSize: theme.spacing(2.4),
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.8),
    },
  },
  links: {
    fontSize: theme.spacing(2.4),
    color: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(1.8),
    },
  },
  button: {
    background: theme.palette.primary.main,
    width: '60%',
    color: 'white',
    marginTop: theme.spacing(1.5),
    alignSelf: 'center',
    fontSize: theme.spacing(2.4),
    [theme.breakpoints.down('sm')]: {
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
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'The passwords you entered do not match')
    .required(''),
});

export interface SignUpFormData {
  userName: string;
  email: string;
  password: string;
  club: string;
  confirmPassword: string;
}

interface SignUpFormProps {
  // visible: boolean;
  isSubmitting: boolean;
  // onFormSubmitted: (data: SignUpFormData) => any;
}

// dummy club
const clubData = [
  {
    id: 1,
    name: 'Manchester United',
  },
  {
    id: 2,
    name: 'Chelsea',
  },
];
export const SignUpForm: React.FC<SignUpFormProps> = () => {
  const initialValues = {
    userName: '',
    email: '',
    password: '',
    club: '',
    confirmPassword: '',
  };

  const handleSubmit = (values: SignUpFormData, formik: FormikHelpers<SignUpFormData>) => {
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
          <Grid className={classes.main}>
            <Paper elevation={5} className={classes.formMain}>
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
                  component={InputTextField}
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Field
                  className={classes.formControl}
                  variant="outlined"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  placeholder="Password"
                  component={InputTextField}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <Field
                  style={{ marginBtoom: '20px' }}
                  className={classes.formControl}
                  variant="outlined"
                  shrink={false}
                  select
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: 'bottom',
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
                  {/* <MenuItem value="">
                    <em>None</em>
                  </MenuItem> */}
                  {clubData.map((data) => (
                    <MenuItem key={data.id} value={data.id}>
                      {data.name}
                    </MenuItem>
                  ))}
                </Field>
                <Grid item xs={12}>
                  <Typography className={classes.terms} variant="h5">
                    I agree with the
                    <Link className={classes.links} to="/terms">
                      {' '}
                      Terms & Conditions
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
              </Form>
            </Paper>
          </Grid>
        )}
      </Formik>
    </>
  );
};

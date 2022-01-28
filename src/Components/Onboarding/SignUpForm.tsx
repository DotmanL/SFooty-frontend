import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  formMain: {
    padding: theme.spacing(3, 30, 5, 30),
    backgroundColor: 'whitesmoke',
  },
  header: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(4.8),
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'blue',
  },
}));

const SignUpForm: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.main}>
      <Paper elevation={5} className={classes.formMain}>
        <Typography variant="h2" className={classes.header}>
          Create an account
        </Typography>
        <Grid className={classes.formContainer}>
          <div>
            <h4>Form</h4>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SignUpForm;

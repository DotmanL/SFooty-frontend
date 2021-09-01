import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down('sm')]: {},
  },
}));

const SignUpPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <h3>SignUp</h3>
    </Grid>
  );
};

export default SignUpPage;

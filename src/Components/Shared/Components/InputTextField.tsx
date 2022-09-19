import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import withStyles from '@mui/styles/withStyles';
import { TextField, TextFieldProps } from 'formik-mui';
import { PasswordTextField } from './PasswordTextField';
// @ts-ignore

const useStyles = makeStyles(() => ({
  styling: {
    width: '100%',

  },
  input: {
  },
}));

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      background: '#EEF2F6',
      // marginTop: '30px',
      // color: '#27AE60',
    },
  },
})(TextField);

type InputProps = TextFieldProps;

export const InputTextField: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = useStyles();
  const fieldProps = {
    ...props,
    className: `${classes.styling} ${className}`,
  };

  const passwordFieldProps = {
    ...props,
    className: ` ${classes.input}`,
  };


  if (props.type === 'password') {
    return <PasswordTextField {...passwordFieldProps} />;
  }

  return <CssTextField {...fieldProps} />;
};

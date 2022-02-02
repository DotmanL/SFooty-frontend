import React, { useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiTextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';

const useStyles = makeStyles(() => ({
  styling: {
    marginTop: '15px',
  },
}));

type InputProps = TextFieldProps;

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      background: '#EEF2F6',
    },
  },
})(MuiTextField);

export const PasswordTextField: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = useCallback(() => {
    setValues({ ...values, showPassword: !values.showPassword });
  }, [values, setValues]);

  const handleMouseDownPassword = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }, []);

  return (
    <CssTextField
      {...fieldToTextField(props)}
      type={values.showPassword ? 'text' : 'password'}
      className={`${classes.styling} ${className}`}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

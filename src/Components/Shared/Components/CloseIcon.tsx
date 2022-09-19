import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    // position: 'absolute',
    // right: theme.spacing(1),
    // top: theme.spacing(0),
    // background: 'red',
    color: theme.palette.grey[500],
  },
  dialogClose: {
    backgroundColor: 'orange',
    marginTop: '0px',
  },
}));

export interface Props {
  onClick: () => void;
 // open: boolean;
}

export const CloseIconComponent: React.FC<Props> = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.dialogClose}>
      <IconButton
        {...onClick}
        aria-label="close"
        className={classes.closeButton}
        size="large">
        <CloseIcon />
      </IconButton>
    </Grid>
  );
};

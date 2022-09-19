import React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import withStyles from '@mui/styles/withStyles';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import MuiDialogTitle from '@mui/material/DialogTitle';
import MuiDialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
    [theme.breakpoints.down('md')]: {},
  },
  button: {
    color: theme.palette.background.default,
    background: theme.palette.primary.main,
    width: 'auto',
    height: 'auto',
    padding: theme.spacing(1, 2),
    fontSize: theme.spacing(1.8),
    borderRadius: '10px',
    marginTop: theme.spacing(1),
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(1.4),
      padding: theme.spacing(0.5, 0.8),
    },
  },
}));

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    margin: '0px',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))(MuiDialogContent);

export interface CustomizedDialogsProps {
  component: React.ReactNode;
  buttonTitle: string;
}

export const CustomizedDialogs: React.FC<CustomizedDialogsProps> = ({ component, buttonTitle }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up('lg'));
  const tablet = useMediaQuery(theme.breakpoints.down('lg'));
  const mobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return <>
    <Button
      className={classes.button}
      variant="outlined"
      color="primary"
      onClick={handleClickOpen}
    >
      {buttonTitle}
    </Button>
    {desktop && (
      <Dialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

      >
        <DialogContent style={{ overflow: 'scroll' }}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
            size="large">
            <CloseIcon />
          </IconButton>
          <Grid>{component}</Grid>
        </DialogContent>
      </Dialog>
    )}
    {tablet && (
      <Dialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}

      >
        <DialogContent style={{ overflow: 'scroll' }}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
            size="large">
            <CloseIcon />
          </IconButton>
          <Grid>{component}</Grid>
        </DialogContent>
      </Dialog>
    )}
    {mobile && (
      <Dialog
        fullScreen
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent style={{ overflow: 'scroll' }}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
            size="large">
            <CloseIcon />
          </IconButton>
          <Grid>{component}</Grid>
        </DialogContent>
      </Dialog>
    )}
  </>;
};

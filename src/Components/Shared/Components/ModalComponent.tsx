import React from 'react';
import {
  Theme, withStyles, makeStyles, useTheme,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(0),
    color: theme.palette.grey[500],
    [theme.breakpoints.down('sm')]: {},
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
    [theme.breakpoints.down('sm')]: {
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
    overflowY: 'hidden',
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
  const tablet = useMediaQuery(theme.breakpoints.down('md'));
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          // style={{ overflowY: 'scroll' }}
        >
          <DialogContent>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
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
          <DialogContent>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
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
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Grid>{component}</Grid>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

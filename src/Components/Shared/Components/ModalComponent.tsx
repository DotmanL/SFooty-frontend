import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // background: 'orange',
    alignItems: 'center',
    marginTop: theme.spacing(0),
    padding: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  containerStyle: {
    position: 'absolute' as 'absolute',
    marginTop: '5vh',
    // background: 'red',
    left: '30%',
    // transform: 'translate(-50%, -50%)',
    width: '40%',
    height: 'auto',
    // border: '2px solid #000',
    boxShadow: '24',
    padding: theme.spacing(0, 0, 0, 0),
    p: '4',
    [theme.breakpoints.down('sm')]: {
      left: '5vw',
      width: '90vw',
    },
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
      padding: theme.spacing(0.8, 1),
      fontSize: theme.spacing(1.2),
    },
  },
}));

interface ModalComponentProps {
  buttonTitle: string;
  content: any;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ buttonTitle, content }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="xl" className={classes.main}>
      <Button className={classes.button} onClick={handleOpen}>
        {buttonTitle}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Grid className={classes.containerStyle}>{content}</Grid>
      </Modal>
    </Container>
  );
};

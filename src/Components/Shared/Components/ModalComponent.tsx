import React, { useState } from 'react';
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
    alignItems: 'center',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
  },
}));

interface ModalComponentProps {
  buttonTitle: string;
  component: JSX.Element;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({ buttonTitle, component }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="xl" className={classes.main}>
      <Button>{buttonTitle}</Button>
      <Modal open={open} onClose={handleClose}>
        <Grid>{component}</Grid>
      </Modal>
    </Container>
  );
};

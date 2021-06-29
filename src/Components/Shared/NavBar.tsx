import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Link } from './Link';
import { Hamburger, Navbox } from './Styles/NavBar.styles';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    color: theme.palette.background.default,
    boxShadow: 'none',
    backgroundColor: 'black',
    height: '90px',
    padding: theme.spacing(0),
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      height: '70px',
      borderBottom: '2px solid white',
    },
  },
  titleContainer: {
    display: 'flex',
    alignSelf: 'flex-start',
    marginTop: theme.spacing(0.5),
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appLogo: {},
  appName: {
    fontSize: theme.spacing(3),
  },
  appMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuIconDiv: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      color: 'white',
    },
  },
  mobileMenu: {
    height: '100vh',
    background: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.spacing(2.5),
    margin: theme.spacing(0, 0.8),
  },
  menuText: {
    fontSize: theme.spacing(3.5),
    margin: theme.spacing(2, 0.8),
    color: 'white',
  },
  new: {
    background: 'white',
    color: 'orange',
    height: '90px',
    padding: theme.spacing(0),
    justifyContent: 'center',
    boxShadow: '0 5px 5px -2px rgba(0, 0, 0, 0.2)',
    marginTop: theme.spacing(-0.1),
    [theme.breakpoints.down('sm')]: {
      height: '70px',
    },
  },
}));

interface NavBarProps {
  appName: string;
}

export const NavBar: React.FC<NavBarProps> = ({ appName }) => {
  const classes = useStyles();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);

  const handleMobileMenu = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line operator-linebreak
      const bodyScrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // eslint-disable-next-line no-shadow
      const scrolledDown = bodyScrollTop > 120;
      setScrolledDownEnough(scrolledDown);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolledDownEnough]);

  return (
    <Grid className={classes.root}>
      <AppBar
        position="fixed"
        className={classnames({
          [classes.new]: scrolledDownEnough,
          [classes.appBar]: !scrolledDownEnough,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Grid className={classes.appLogo}>
            <Typography className={classes.appName}>{appName}</Typography>
          </Grid>

          <Grid className={classes.appMenu}>
            <Typography className={classes.text}>Sign Up</Typography>
            <Typography className={classes.text}>Sign In</Typography>
          </Grid>
          <IconButton
            className={classes.menuIconDiv}
            onClick={handleMobileMenu}
          >
            {mobileMenu ? <Hamburger open /> : <Hamburger />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu && (
        <Navbox>
          <Typography className={classes.menuText} onClick={handleMobileMenu}>
            <Link to="/">Sign Up</Link>
          </Typography>
          <Typography className={classes.menuText} onClick={handleMobileMenu}>
            <Link to="/">Sign Up</Link>
          </Typography>
        </Navbox>
      )}
    </Grid>
  );
};

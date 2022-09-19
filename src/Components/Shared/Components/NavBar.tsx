import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { Link } from './Link';
import { Hamburger, Navbox } from './Styles/NavBar.styles';
import Logo from './assets/logo192.png';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    background: theme.palette.background.default,
    // background: 'red',
    top: '0',
    boxShadow: 'none',
    height: '90px',
    padding: theme.spacing(3, 2),
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '60px',
      padding: theme.spacing(2, 0),
      borderBottom: '2px solid white',
    },
  },
  appBarHomePage: {
    background: theme.palette.background.default,
    top: '0',
    boxShadow: 'none',
    height: '90px',
    padding: theme.spacing(3, 2),
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '60px',
      padding: theme.spacing(2, 0),
      borderBottom: '2px solid white',
    },
  },
  titleContainer: {
    display: 'flex',

    marginTop: theme.spacing(0.5),
  },
  toolbar: {
    display: 'flex',
    // background: 'orange',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    // background: 'blue',
  },
  logoo: {
    width: '50px',
    height: '50px',
    marginTop: '13px',
    [theme.breakpoints.down('md')]: {
      width: '30px',
      height: '30px',
      marginTop: '2px',
    },
  },
  appName: {
    fontSize: theme.spacing(4.8),
    fontFamily: 'Montserrat',
    fontWeight: 900,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(2.4),
    },
  },
  appMenu: {
    display: 'flex',
    flexDirection: 'row',
    width: '800px',
    height: '95%',
    padding: theme.spacing(1, 2),
    justifyContent: 'flex-end',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  menuLinks: {
    display: 'flex',
    // background: 'red',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {},
  },
  button: {
    color: theme.palette.background.default,
    background: theme.palette.primary.main,
    width: 'auto',
    height: 'auto',
    borderRadius: '15px',
    padding: theme.spacing(0.3, 2),
    '&:hover': {
      background: theme.palette.primary.main,
      opacity: 0.9,
    },
  },
  menuIconDiv: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  menuIcon: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      color: 'white',
    },
  },
  mobileMenu: {
    height: '100vh',
    // background: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: theme.spacing(2.0),
    margin: theme.spacing(0, 1.8),
    color: theme.palette.background.default,
    fontFamily: 'Montserrat',
    // fontWeight: theme.typography.fontWeightMedium,
    fontWeight: 600,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(1.6),
      margin: theme.spacing(0, 1.4),
    },
  },
  menuText: {
    fontSize: theme.spacing(3.5),
    margin: theme.spacing(2, 0.8),
    color: 'black',
  },
  new: {
    backgroundColor: theme.palette.background.default,
    // background: 'green',
    top: '0',
    color: 'black',
    height: '90px',
    padding: theme.spacing(3, 2),
    justifyContent: 'center',
    boxShadow: '0 5px 5px -2px rgba(0, 0, 0, 0.2)',
    marginTop: theme.spacing(-0.1),
    [theme.breakpoints.down('md')]: {
      height: '60px',
      padding: theme.spacing(3, 0),
    },
  },
}));

interface NavBarProps {
  appName: string;
  isHomePage?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ appName, isHomePage }) => {
  const classes = useStyles();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolledDownEnough, setScrolledDownEnough] = useState(false);
  const [homePage, setHomePage] = useState(false);

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
      if (isHomePage === true) {
        setHomePage(true);
      } else {
        setHomePage(false);
      }
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
          [classes.appBarHomePage]: homePage,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <Link to="/">
            <Grid className={classes.appLogo}>
              <img className={classes.logoo} src={Logo} alt="Logo" />
              <Typography className={classes.appName}>{appName}</Typography>
            </Grid>
          </Link>

          <Grid className={classes.appMenu}>
            <Grid className={classes.menuLinks}>
              <Link to="/" style={{ color: 'black' }} className={classes.text}>
                About us
              </Link>
              <Link to="/" style={{ color: 'black' }} className={classes.text}>
                Contact us
              </Link>
              <Link
                to="/signin"
                className={classes.text}
                style={{ color: '#27AE60' }}
              >
                Sign in
              </Link>
              <Button className={classes.button}>
                <Link to="/signup" className={classes.text}>
                  Sign Up
                </Link>
              </Button>
            </Grid>
          </Grid>

          <IconButton className={classes.menuIconDiv} onClick={handleMobileMenu} size="large">
            {mobileMenu ? <Hamburger open /> : <Hamburger />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {mobileMenu && (
        <Navbox>
          <Typography className={classes.menuText} onClick={handleMobileMenu}>
            <Link to="/signup">Sign Up</Link>
          </Typography>
          <Typography className={classes.menuText} onClick={handleMobileMenu}>
            <Link to="/signin">Sign In</Link>
          </Typography>
        </Navbox>
      )}
    </Grid>
  );
};

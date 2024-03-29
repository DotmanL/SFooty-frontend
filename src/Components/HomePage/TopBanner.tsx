import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import makeStyles from '@mui/styles/makeStyles';
// import { Link } from '../Shared/Components/Link';
import { toast } from 'react-toastify';
import PL from './assets/pl.png';
import LaLiga from './assets/laliga2.png';
import BundesLiga from './assets/bliga.png';
import Ligue1 from './assets/ligue1.svg';
import { CustomizedDialogs } from '../shared/components/ModalComponent';
import { SignUpForm, SignUpFormData } from '../onboarding/SignUpForm';
import users from '../api/users';
// import SerieA from './assets/seriea.png';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
    },
  },
  firstEmojiC: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(2, 12),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 7),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2.5),
      padding: theme.spacing(2, 3),
    },
  },

  imagePl: {
    width: '120px',
    height: '120px',
    marginTop: theme.spacing(1.5),
    [theme.breakpoints.down('md')]: {
      width: '50px',
      height: '50px',
      marginTop: theme.spacing(0.5),
    },
  },

  imageLl: {
    width: '120px',
    height: '160px',
    marginTop: theme.spacing(-1),
    [theme.breakpoints.down('md')]: {
      width: '40px',
      height: '60px',
      marginTop: theme.spacing(-2.4),
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    marginTop: theme.spacing(-5),
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(-5),
    },
  },
  introText: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Montserrat',
    fontSize: theme.spacing(5.6),
    fontWeight: 750,
    textAlign: 'center',
    color: theme.palette.primary.main,
    [theme.breakpoints.down('md')]: {
      fontWeight: 600,
      width: 'auto',
      fontSize: theme.spacing(1.6),
    },
  },
  subText: {
    fontSize: theme.spacing(2.4),
    fontWeight: 500,
    lineHeight: '30px',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    width: '50%',
    marginTop: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '60%',
      fontWeight: 500,
      lineHeight: '20px',
      fontSize: theme.spacing(1.4),
      marginTop: theme.spacing(1),
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
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(0.8, 1),
      fontSize: theme.spacing(1.2),
    },
  },
  text: {
    color: theme.palette.background.default,
  },
  secondEmojiC: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    // background: 'red',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 18),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2, 2),
    },
  },

  imageBliga: {
    width: '120px',
    height: '120px',
    marginTop: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      width: '50px',
      height: '50px',
      marginTop: theme.spacing(3.5),
    },
  },
  // imageSeriea: {
  //   width: '120px',
  //   height: '170px',
  //   marginTop: theme.spacing(3),
  //   [theme.breakpoints.down('sm')]: {
  //     width: '55px',
  //     height: '65px',
  //     marginTop: theme.spacing(4),
  //   },
  // },
  imageLigue1: {
    width: '150px',
    height: '150px',
    marginTop: theme.spacing(-1),
    [theme.breakpoints.down('md')]: {
      width: '65px',
      height: '55px',
      marginTop: theme.spacing(2.5),
    },
  },
}));

const onFormSubmitted = async (formData: SignUpFormData) => {
  try {
    await users.apiClient.post<SignUpFormData>('/api/users/signup', formData);
    toast.success('Account Created');
  } catch (err: any) {
    const { errors } = err.response.data;
    if (errors) {
      errors.map((error: any) => toast.error(error.msg));
    }
  }
};

const TopBanner: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.main}>
      <Grid className={classes.firstEmojiC}>
        <img className={classes.imagePl} src={PL} alt="PremierLeague" />

        <img className={classes.imageLl} src={LaLiga} alt="Laliga" />
      </Grid>
      <Grid className={classes.textContainer}>
        <Typography className={classes.introText} variant="h2">
          Sport is all we do
          <div>at sporty</div>
        </Typography>
        <Typography className={classes.subText} variant="h4">
          Sporty connects everyone who loves football together to chat, banter your friends and know
          what is trending.
        </Typography>
        <CustomizedDialogs
          buttonTitle="Join Now"
          component={<SignUpForm isSubmitting={false} onFormSubmitted={onFormSubmitted} visible />}
        />

        {/* <Button className={classes.button}>
          <Link to="/signup" className={classes.text}>
            Join Now
          </Link>
        </Button> */}
      </Grid>
      <Grid className={classes.secondEmojiC}>
        <img className={classes.imageBliga} src={BundesLiga} alt="BundesLiga" />
        {/* <img className={classes.imageSeriea} src={SerieA} alt="SerieA" /> */}
        <img className={classes.imageLigue1} src={Ligue1} alt="Ligue1" />
      </Grid>
    </Grid>
  );
};

export default TopBanner;

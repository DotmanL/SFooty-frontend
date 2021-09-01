import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import {
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { history } from './history';
import Spinner from './Components/Shared/Spinner';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./Pages/OnboardingPages/SignUpPage'));
const AboutUsPage = lazy(() => import('./Pages/AboutUsPage/AboutUsPage'));

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      background: {
        default: '#ffffff',
      },
      primary: {
        main: '#27AE60',
      },
      info: {
        main: '#1C819E',
      },
    },
    spacing: (value) => `${value * 10}px`,
    typography: {
      fontFamily: [
        'Montserrat',
        'Montserrat Alternates',
        'Nunito',
        'Roboto',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 600,
      fontWeightBold: 900,
    },
    overrides: {
      MuiButton: {
        root: {
          padding: '14px 45px',
        },
      },
    },
  })
);

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Suspense fallback={<Spinner />}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/aboutus" component={AboutUsPage} />
          <Route exact path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </Suspense>
  </ThemeProvider>
);

export default App;

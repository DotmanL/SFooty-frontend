import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, Zoom } from 'react-toastify';
import { history } from './history';
import Spinner from './Components/Shared/Components/Spinner';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./Pages/OnboardingPages/SignUpPage'));
const SignInPage = lazy(() => import('./Pages/OnboardingPages/SignInPage'));
const AboutUsPage = lazy(() => import('./Pages/AboutUsPage/AboutUsPage'));
const NotFoundPage = lazy(() => import('./Components/Shared/Pages/NotFoundPage'));

const styles = {
  marginTop: '80px',
};

const theme = responsiveFontSizes(
  createTheme({
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
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer style={styles} closeOnClick transition={Zoom} />
      <Suspense fallback={<Spinner />}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/aboutus" component={AboutUsPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

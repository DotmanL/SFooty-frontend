import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router-dom';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Theme,
  StyledEngineProvider,
  adaptV4Theme,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, Zoom } from 'react-toastify';
import { history } from './history';
import Spinner from './components/shared/components/Spinner';
import 'react-toastify/dist/ReactToastify.css';


declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('./pages/OnboardingPages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/OnboardingPages/SignInPage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage/AboutUsPage'));
const NotFoundPage = lazy(() => import('./components/shared/pages/NotFoundPage'));

const styles = {
  marginTop: '80px',
};

const theme = responsiveFontSizes(
  createTheme(adaptV4Theme({
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
    spacing: (value: number) => `${value * 10}px`,
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
  }))
);
const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst>
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
    </StyledEngineProvider>
  </QueryClientProvider>
);

export default App;

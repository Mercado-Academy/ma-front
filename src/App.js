import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { ThemeProvider, CssBaseline } from '@material-ui/core';
import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store/index';

import MuiTheme from './styles/MuiTheme';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={MuiTheme}>
          <Router basename="/" history={history}>
            <Routes />
            <CssBaseline />
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

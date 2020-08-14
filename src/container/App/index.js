import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../commons/theme';
import { Provider } from 'react-redux';
import configurestore from '../../redux/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../component/loadding';
import ComponentModal from '../../component/modal/index';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ADMIN_ROUTES } from '../../routes/index';
import AdminLayoutRoute from '../../commons/layout/AdminLayoutRoute';
import CssBaseline from '@material-ui/core/CssBaseline';

const store = configurestore();

class App extends Component {
  renderAdminRoutes = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          component={route.componentRouter}
          exact={route.exact}
          name={route.name}
          path={route.path}
        />
      );
    });
    return xhtml;
  };

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <Loading />
            <ComponentModal />
            <Switch>{this.renderAdminRoutes()}</Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);

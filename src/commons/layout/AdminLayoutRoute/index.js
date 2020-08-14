/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../../component/dashboard/index';

class AdminLayoutRoute extends Component {
  render() {
    const { name, component: YourComponent, path, exact } = this.props;
    return (
      <Route
        path={path}
        exact={exact}
        name={name}
        render={(routeProps) => {
          return (
            <Dashboard name={name} {...routeProps}>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

export default AdminLayoutRoute;

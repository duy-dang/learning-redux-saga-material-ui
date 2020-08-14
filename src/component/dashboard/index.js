import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Hearder from './hearder/index';
import Sidebar from './sidebar/index';
import { connect } from 'react-redux';
import * as uiactions from '../../actions/ui';
import { bindActionCreators } from 'redux';
import cn from 'classnames';

class Dashboard extends Component {
  hanldetogglesidebar = (value) => {
    const { uiactionscreate } = this.props;
    const { hidesidebar, showsidebar } = uiactionscreate;
    if (value === true) {
      showsidebar();
    } else {
      hidesidebar();
    }
  };

  render() {
    const { children, classes, name, showsidebar } = this.props;
    return (
      <div>
        <Hearder
          name={name}
          showsidebar={showsidebar}
          ontogglesidebar={(value) => this.hanldetogglesidebar(value)}
        />
        <div className={classes.wrapper}>
          <Sidebar
            showsidebar={showsidebar}
            ontogglesidebar={(value) => this.hanldetogglesidebar(value)}
          />
          <div
            className={cn(classes.wrapperContent, {
              [classes.shiftleft]: showsidebar === false,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showsidebar: state.ui.showsidebar,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    uiactionscreate: bindActionCreators(uiactions, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);

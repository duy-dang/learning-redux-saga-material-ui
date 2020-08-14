import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import IconGif from '../../assets/img/loading.gif';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as uiActions from '../../actions/ui';

class Loading extends Component {
  render() {
    const { showloading, classes } = this.props;
    let xhtml = null;
    if (showloading) {
      xhtml = (
        <div className={classes.loading}>
          <img src={IconGif} className={classes.icongif} alt="loanding" />
        </div>
      );
    }
    return xhtml;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    showloading: state.ui.showloading,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loading: bindActionCreators(uiActions, dispatch),
  };
};
const withconnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withconnect)(Loading);

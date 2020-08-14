import React, { Component } from 'react';
import styles from './styles';
import { withStyles, Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';

class ComponentModal extends Component {
  render() {
    const { open, modalActionsreator, classes, title, component } = this.props;
    const { hideform } = modalActionsreator;
    return (
      <Modal open={open} onClose={hideform}>
        <div className={classes.modal}>
          <div className={classes.header}>
            <span>
              <h3>{title}</h3>
            </span>
          </div>
          <div className={classes.content}>{component}</div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    open: state.modal.showmodal,
    title: state.modal.title,
    component: state.modal.component,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modalActionsreator: bindActionCreators(modalActions, dispatch),
  };
};

const withconnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withconnect)(ComponentModal);

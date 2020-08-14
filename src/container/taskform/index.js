import React, { Component } from 'react';
import { withStyles, Grid, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../constants/formMacdinh/textfield/TextField';
import validate from './validate';
import renderSelectField from '../../constants/formMacdinh/SelectField';

const required = (value) =>
  value || typeof value === 'number' ? undefined : 'vui lòng nhập thông tin';

const maxLength = (max) => (value) =>
  value && value.length > max ? `nhập tối đa ${max} kí tự` : undefined;

const maxLength10 = maxLength(10);

class Taskform extends Component {
  layform = (data) => {
    const { taskActionsreator, formTaskEdit } = this.props;
    const { addTask, updateTask } = taskActionsreator;
    const { title, description, status } = data;
    if (formTaskEdit && formTaskEdit.id) {
      updateTask(title, description, status);
    } else {
      addTask(title, description);
    }
  };

  showSelectField = () => {
    let xhtml = null;
    const { classes, formTaskEdit } = this.props;
    if (formTaskEdit && formTaskEdit.id) {
      xhtml = (
        <Field
          classes={classes.select}
          name="status"
          component={renderSelectField}
          label="Trạng thái"
        >
          <MenuItem value={0}>READY</MenuItem>
          <MenuItem value={1}>IN PROGRESS</MenuItem>
          <MenuItem value={2}>COMPLETED</MenuItem>
        </Field>
      );
    }
    return xhtml;
  };

  hideModal = () => {
    const { modalActionsreator, taskActionsreator } = this.props;
    const { hideform } = modalActionsreator;
    const { editTask } = taskActionsreator;
    hideform();
    editTask(null);
  };

  render() {
    const { invalid, submitting, handleSubmit, classes } = this.props;
    const { modalActionsreator, formTaskEdit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.layform)}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Field
              id="title"
              name="title"
              component={renderTextField}
              label="Tiêu đề"
              validate={maxLength10}
              value={formTaskEdit ? formTaskEdit.title : ''}
            />
          </Grid>
          <Grid item md={12}>
            <Field
              id="description"
              name="description"
              component={renderTextField}
              label="description"
              validate={[required, maxLength10]}
              value={formTaskEdit ? formTaskEdit.description : ''}
            />
          </Grid>
          <Grid item md={12}>
            {this.showSelectField()}
          </Grid>
          <Grid item md={12}>
            <Button onClick={() => this.hideModal()} color="primary">
              Thoát
            </Button>
            <Button
              disabled={invalid || submitting}
              color="primary"
              type="submit"
            >
              Lưu lại
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    formTaskEdit: state.task.formTaskEdit,
    initialValues: {
      title: state.task.formTaskEdit ? state.task.formTaskEdit.title : null,
      description: state.task.formTaskEdit
        ? state.task.formTaskEdit.description
        : null,
    },
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    modalActionsreator: bindActionCreators(modalActions, dispatch),
    taskActionsreator: bindActionCreators(taskActions, dispatch),
  };
};

const formname = 'TASK_MANAGEMENT';

const withreduxForm = reduxForm({
  form: formname,
  validate,
  enableReinitialize: true,
});

const withconnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withStyles(styles),
  withreduxForm,
  withconnect
)(Taskform);

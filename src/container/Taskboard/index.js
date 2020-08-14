import React, { Component } from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import { withStyles, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants/index';
import Tasklist from '../../component/tasklist';
import Taskform from '../taskform';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/task';
import * as modalActions from '../../actions/modal';
import Search from '../../component/search';

class Taskboard extends Component {
  componentDidMount() {
    const { taskActionsreator } = this.props;
    const { fetchListTask } = taskActionsreator;
    fetchListTask();
  }

  handlOpen = () => {
    const { modalActionsreator } = this.props;
    const {
      showform,
      changemodaltitle,
      changemodalcontent,
    } = modalActionsreator;
    showform();
    changemodaltitle('Thêm mới công việc');
    changemodalcontent(<Taskform />);
  };

  handleEdit = (value) => {
    const { taskActionsreator } = this.props;
    const { editTask } = taskActionsreator;
    editTask(value);
    const { modalActionsreator } = this.props;
    const {
      showform,
      changemodaltitle,
      changemodalcontent,
    } = modalActionsreator;
    showform();
    changemodaltitle('Cập nhập công việc');
    changemodalcontent(<Taskform />);
  };

  showModalDelete = (value) => {
    const { modalActionsreator } = this.props;
    const {
      showform,
      changemodaltitle,
      changemodalcontent,
      hideform,
    } = modalActionsreator;
    showform();
    changemodaltitle('Xóa công việc');
    changemodalcontent(
      <div>
        <div>
          Bạn có chắc muốn xóa{' '}
          <span>
            <b>{value.title}</b>
          </span>
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={() => hideform()}>
              Hủy bỏ
            </Button>
          </Box>
          <Box ml={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDelete(value)}
            >
              xóa bỏ
            </Button>
          </Box>
        </Box>
      </div>
    );
  };

  handleDelete = (value) => {
    const { taskActionsreator } = this.props;
    const { deleteTask } = taskActionsreator;
    const { id } = value;
    deleteTask(id);
  };

  showGrid = () => {
    const { listtasks } = this.props;
    return (
      <Grid container spacing={2}>
        {STATUSES.map((statuse, key) => {
          const taskFiltered = listtasks.filter(
            (task) => task.status === statuse.value
          );
          return (
            <Tasklist
              key={key}
              statuse={statuse}
              taskFiltered={taskFiltered}
              onEdit={this.handleEdit}
              onDelete={this.showModalDelete}
            />
          );
        })}
      </Grid>
    );
  };

  LoadingData = () => {
    const { taskActionsreator } = this.props;
    const { fetchListTask } = taskActionsreator;
    fetchListTask();
  };

  keyword = (event) => {
    const { value } = event.target;
    const { taskActionsreator } = this.props;
    const { filtertask } = taskActionsreator;
    filtertask(value);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => this.LoadingData()}
        >
          Loading data
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => this.handlOpen()}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        <Search handleChange={(event) => this.keyword(event)} />
        {this.showGrid()}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    listtasks: state.task.listtasks,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    taskActionsreator: bindActionCreators(taskActions, dispatch),
    modalActionsreator: bindActionCreators(modalActions, dispatch),
  };
};
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);

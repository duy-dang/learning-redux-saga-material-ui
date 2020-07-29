import React, { Component } from 'react';
import styles from './styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../constants';
import Tasklist from '../../component/tasklist';
import Taskform from '../../component/taskform';

const listtask = [
  {
    id: 1,
    title: 'read book',
    description: ' read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'play football',
    description: 'with my friends',
    status: 2,
  },
  {
    id: 3,
    title: 'play game',
    description: '',
    status: 1,
  },
];

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handlOpendiglog = () => {
    this.setState({
      open: true,
    });
  };

  handlCloesdiglog = () => {
    this.setState({
      open: false,
    });
  };

  showDiglog = () => {
    const { open } = this.state;
    return (
      <Taskform open={open} handlCloesdiglog={() => this.handlCloesdiglog()} />
    );
  };

  showGrid = () => {
    return (
      <Grid container spacing={2}>
        {STATUSES.map((statuse, key) => {
          const taskFiltered = listtask.filter(
            (task) => task.status === statuse.value
          );
          return (
            <Tasklist key={key} statuse={statuse} taskFiltered={taskFiltered} />
          );
        })}
      </Grid>
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => this.handlOpendiglog()}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.showGrid()}
        {this.showDiglog()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);

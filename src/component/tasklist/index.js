import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Taskitem from '../taskitem';
import styles from './styles';

class Tasklist extends Component {
  render() {
    const { taskFiltered, statuse, onEdit, onDelete } = this.props;
    return (
      <Grid item md={4} xs={12}>
        <Box mt={3} mb={1}>
          <div>{statuse.label}</div>
        </Box>
        <div>
          {taskFiltered.map((value, key) => {
            return (
              <Taskitem
                key={key}
                statuse={statuse}
                value={value}
                onEdit={() => onEdit(value)}
                onDelete={() => onDelete(value)}
              />
            );
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(Tasklist);

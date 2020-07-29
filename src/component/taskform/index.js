import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class Taskform extends Component {
  render() {
    const { open, handlCloesdiglog } = this.props;
    return (
      <Dialog
        open={open}
        onClose={handlCloesdiglog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">THÊM MỚI CÔNG VIỆC</DialogTitle>
        <DialogContent>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlCloesdiglog} color="primary">
            Thoát
          </Button>
          <Button onClick={handlCloesdiglog} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(Taskform);

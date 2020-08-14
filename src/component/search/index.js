import React, { Component } from 'react';
import styles from './styles';
import { withStyles, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

class Search extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <TextField
          className={classes.search}
          onChange={handleChange}
          margin="normal"
        />
      </div>
    );
  }
}

export default withStyles(styles)(Search);

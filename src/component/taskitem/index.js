import React, { Component } from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

class Taskitem extends Component {
  render() {
    var { value, statuse, classes } = this.props;
    var { title, description, status } = value;
    return (
      <Card>
        <CardContent>  
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {statuse.label}
            </Grid>
          </Grid>
          <p>{description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <IconButton size="small" color="primary" aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton size="small" color="primary" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Taskitem);

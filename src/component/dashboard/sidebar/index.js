import React, { Component } from 'react';
import { withStyles, Drawer } from '@material-ui/core';
import styles from './styles';
import { ADMIN_ROUTES } from '../../../routes/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
  toggleDrawer = (value) => {
    const { ontogglesidebar } = this.props;
    if (ontogglesidebar) {
      ontogglesidebar(value);
    }
  };

  renderListsidebar = () => {
    const { classes } = this.props;
    let xhtml = null;
    xhtml = (
      <div className={classes.list}>
        <List component="div">
          {ADMIN_ROUTES.map((item) => {
            return (
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                key={item.path}
                activeClassName={classes.activeclassname}
              >
                <ListItem className={classes.menuItem} button>
                  {item.name}
                </ListItem>
              </NavLink>
            );
          })}
        </List>
      </div>
    );
    return xhtml;
  };

  render() {
    const { classes, showsidebar } = this.props;
    return (
      <Drawer
        variant="persistent"
        open={showsidebar}
        onClose={() => this.toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {this.renderListsidebar()}
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);

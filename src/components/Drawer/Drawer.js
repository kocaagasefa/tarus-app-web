import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Drawer, List, ListItem, ListItemText, Divider, withStyles, Hidden } from '@material-ui/core';
import { Person, Home, SupervisedUserCircleRounded } from '@material-ui/icons';

class CustomDrawer extends Component {
  render() {
    const { classes, open } = this.props;
    const menus = [
      { value: 'Profile', to: '/profile', icon: Person },
      { value: 'Houses', to: '/houses', icon: Home },
      { value: 'Roommates', to: '/roommates', icon: SupervisedUserCircleRounded}
    ]

    return (
      <nav className={classes.drawer}>
        <Hidden>
          <Drawer container={this.props.container}
            variant="persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={open}>
            <div className={classes.toolbar} />
            <List>
              {
                menus.map((obj) => {
                  const Icon = obj.icon;
                  return (
                    <ListItem component={Link} to={obj.to} button key={obj.to}>
                      <Icon />
                      <ListItemText primary={obj.value} />
                    </ListItem>
                  )
                })
              }
            </List>
            <Divider />
          </Drawer>
        </Hidden>
      </nav>
    )
  }
}
const drawerWidth = 300;
const styles = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
})

export default withStyles(styles)(CustomDrawer)
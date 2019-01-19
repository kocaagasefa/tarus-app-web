import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, withStyles, Hidden } from '@material-ui/core';
import { Mail, Person, Home } from '@material-ui/icons';

class CustomDrawer extends Component {
  getIcon = (menuName) => {
    debugger;

    switch (menuName) {
      case 'profile':
        return <Person />;
      default:
        return <Person />;
    }
  }

  render() {
    const { classes, open } = this.props;

    return (
      <nav className={classes.drawer}>
        <Hidden>
          <Drawer
            container={this.props.container}
            variant="persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={open}
          >
            <div className={classes.toolbar} />
            <List>
              {
                [{ value: 'Profile Page', link: 'profile' },
                { value: 'Houses', link: 'houses' }].map((obj, index) => (
                  <ListItem button key={obj.value} component="a" href={obj.link}>
                    <ListItemIcon>
                      {
                        obj.link === 'profile' ? <Person /> :
                          obj.link === 'houses' ? <Home /> : null
                      }
                    </ListItemIcon>
                    <ListItemText primary={obj.value} />
                  </ListItem>
                ))
              }
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <Person /> : <Mail />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
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
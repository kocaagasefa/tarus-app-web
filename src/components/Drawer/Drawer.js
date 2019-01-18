import React, { Component } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText,Divider, withStyles, Hidden } from '@material-ui/core';
import { Inbox, Mail} from '@material-ui/icons'
class CustomDrawer extends Component  {

    render(){
        const { classes,open } = this.props;
        return(
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
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
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
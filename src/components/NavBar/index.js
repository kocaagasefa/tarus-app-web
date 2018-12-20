import React from 'react';
import { withStyles, FormLabel, Chip,AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu, ClassSharp } from '@material-ui/icons';

const navBar = props => {
    const { classes,t, toggleDrawer } = props;

    return (
        <div className={classes.navBar}>
            <AppBar position="relative" className={classes.navBar}>
            <Toolbar>
            <IconButton className={ClassSharp.menuButton} color="inherit" onClick={toggleDrawer}>
                    <Menu />
                </IconButton>
                <Typography className={classes.brand} variant="h6" color="inherit">
                    HomeBine
                </Typography>
                <div>
                {
                props.user ?
                    <>
                        <Chip className={classes.content} label={props.user.email}></Chip>
                        <FormLabel className={classes.content} onClick={props.signOut}>{t('navbar.signout')}</FormLabel>
                    </>
                    :
                    <>
                        <Button onClick={props.onSignInOpen} className={classes.content} color="inherit">{t('navbar.signin')}</Button>
                        
                        <Button onClick={props.onSignUpOpen} className={classes.content} color="inherit">{t('navbar.signup')}</Button>
                    </>
            }

                </div>
                

                        <Button color="inherit" className={classes.content+" "+ (props.lng==="en"?classes.activeLanguage:"")} onClick={()=>props.changeLanguage('en')}> EN </Button>
                        
                        <Button color="inherit" className={classes.content+" "+(props.lng==="tr"?classes.activeLanguage:"")} onClick={()=>props.changeLanguage('tr')}> TR </Button>
                        </Toolbar>
                        </AppBar>
        </div>
    )
};



const styles = theme => ({
    navBar: {
        flexGrow:1,
        backgroundImage: 'linear-gradient(-180deg, #380040 0%, #6F007F 100%)',
        zIndex: theme.zIndex.drawer + 1,
    },
    brand:{
        flexGrow:1
    },
    activeLanguage:{
        fontWeight:"bold"
    },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

export default withStyles(styles)( navBar);
import React from 'react';
import { connect } from 'react-redux';
import { withStyles, Chip, AppBar, Toolbar, IconButton, Typography, Button, Hidden, withWidth } from '@material-ui/core';
import { Menu, ClassSharp } from '@material-ui/icons';
import compose from 'recompose/compose';
const navBar = props => {
    const { classes, t, toggleDrawer } = props;

    return (
        <div className={classes.navBar}>
            <AppBar position="relative" className={classes.navBar}>
                <Toolbar>
                    {
                        props.user &&
                        <IconButton className={ClassSharp.menuButton + " " + classes.menuButton} color="inherit" onClick={toggleDrawer}>
                            <Menu />
                        </IconButton>
                    }
                    <Typography className={classes.brand} variant="h6" color="inherit">
                        HOMEBINE
                    </Typography>
                    <div>
                        {
                            props.user ?
                                <>
                                    <Chip label={props.user.email}></Chip>
                                    <Button className={classes.btn} onClick={props.signOut} color="inherit">{t('navbar.signout')}</Button>
                                </>
                                :
                                <>
                                    <Button onClick={props.onSignInOpen} className={classes.btn} color="inherit">{t('navbar.signin')}</Button>
                                    <Button onClick={props.onSignUpOpen} className={classes.btn} color="inherit">{t('navbar.signup')}</Button>
                                </>
                        }

                    </div>
                    <Hidden mdDown>
                        <Button color="inherit" className={classes.btn + " " + (props.lng === "en" ? classes.activeLanguage : "")} onClick={() => props.changeLanguage('en')}> EN </Button>
                        <Button color="inherit" className={classes.btn + " " + (props.lng === "tr" ? classes.activeLanguage : "")} onClick={() => props.changeLanguage('tr')}> TR </Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    )
};

const styles = theme => ({
    btn: {
        backgroundImage: 'linear-gradient(-180deg, rgba(49, 39, 201, 0.7), rgba(230, 69, 126))',
        marginLeft: 2
    },
    navBar: {
        //backgroundImage: 'linear-gradient(-180deg, #380040 0%, #6F007F 100%)',
        backgroundColor: 'white',
        zIndex: theme.zIndex.drawer + 1,
    },
    brand: {
        color: 'rgba(49, 39, 201, 0.7)',
        flexGrow: 1
    },
    activeLanguage: {
        fontWeight: "bold"
    },
    menuButton: {
        color: 'rgba(49, 39, 201, 0.7)',
        marginLeft: -12,
        marginRight: 20,
    },
})

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(compose(withStyles(styles), withWidth())(navBar));
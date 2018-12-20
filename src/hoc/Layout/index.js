import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import SignInDialog from '../../containers/Auth/SignInDialog';
import SignUpDialog from '../../containers/Auth/SignUpDialog';
import Drawer from '../../components/Drawer/Drawer';
import { signOut } from '../../store/actions';
import './style.css';
import { withNamespaces } from 'react-i18next';
import classNames from 'classnames'
import { withStyles } from '@material-ui/core';

const drawerWith =300;

class Layout extends Component {
    state = {
        email: "",
        password: "",
        openSignInDialog: false,
        openSignUpDialog: false,
        openDrawer:false
    }
    
    onInputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignInOpen = () => {
        this.setState({ openSignInDialog: true });
    }

    handleSignInClose = () => {
        this.setState({ openSignInDialog: false });
    }

    handleSignUpOpen = () => {
        this.setState({ openSignUpDialog: true });
    }

    handleSignUpClose = () => {
        this.setState({ openSignUpDialog: false });
    }
    handleChangeLanguage = (lng) => {
        this.props.i18n.changeLanguage(lng);
    }
    handleDrawerToggle = () => this.setState(prevState=>{
        return {
            openDrawer:!prevState.openDrawer
        }
    })

    render() {
        const { classes } = this.props;
        return (
            <>
                <NavBar
                    t={this.props.t}
                    lng={this.props.lng}
                    changeLanguage={this.handleChangeLanguage}
                    onSignInOpen={this.handleSignInOpen}
                    onSignUpOpen={this.handleSignUpOpen}
                    user={this.props.user}
                    toggleDrawer={this.handleDrawerToggle}
                    inputChanged={this.onInputChangeHandler}
                    signOut={this.props.signOut} />
                <SignInDialog
                    open={this.state.openSignInDialog}
                    onSignInClose={this.handleSignInClose}
                />
                <SignUpDialog
                    open={this.state.openSignUpDialog}
                    onSignUpClose={this.handleSignUpClose}
                />
                
                <Drawer open={this.state.openDrawer} />
                <main className={classNames(classes.content, {
            [classes.contentShift]: this.state.openDrawer,
          })}>
                
                    {this.props.children}
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const styles= theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWith,
      },
})

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces("")(withStyles(styles) (Layout)));
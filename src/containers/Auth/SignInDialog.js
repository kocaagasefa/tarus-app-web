import React, { Component } from 'react';
import { Dialog, Card, ListSubheader, withStyles } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import SignInFields from './SignInFields';

class SignInDialog extends Component {
    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.props.onSignInClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
                <Card className={classes.signIn}>
                    <PeopleIcon className={classes.icon} color="white" />
                    <ListSubheader component="div" className={classes.subHeader}>HOMEBINE</ListSubheader>
                    <SignInFields onSignInClose={this.props.onSignInClose}/>
                </Card>
            </Dialog>
        );
    }
}

const style = theme => ({
    signIn: {
        border: '2px solid #6F007F',
        backgroundColor: 'initial',
        backgroundImage: 'linear-gradient(-180deg, #380040 0%, #6F007F 100%)',
        textAlign: 'center',
        textColor: '#f3f3f3'
    },
    icon: {
        width: '20%',
        height: '20%',
        justifyContent: 'center',
        margin: 'auto',
        color: '#f3f3f3'
    },
    subHeader: {
        fontSize: '25px',
        color: 'white'
    }
})

export default withStyles(style)(SignInDialog);

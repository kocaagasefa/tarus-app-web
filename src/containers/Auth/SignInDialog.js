import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dialog, ListSubheader, withStyles } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import Button from '../../components/UI/CustomButton';
import Input from '../../components/UI/CustomInput';
import { SIGN_IN_SUCCESS } from '../../store/actions/actionTypes';
import {
    AlternateEmail as EmailIcon,
    VpnKey as PasswordIcon
} from '@material-ui/icons'
import { signInWithEmailAndPassword, googleSignIn, facebookSignIn } from '../../store/actions';
import { withNamespaces } from 'react-i18next';

class SignInDialog extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClose = () => {
        this.props.signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(x => {
                if(x && x.type === SIGN_IN_SUCCESS)
                    this.props.onSignInClose();
            })
        this.setState({ email: '', password: '' })
    };

    handleGoogleClose = () => {
        this.props.googleSignIn();
        this.props.onSignInClose();
        this.setState({ email: '', password: '' })
    };

    handleFacebookClose = () => {
        this.props.facebookSignIn();
        this.props.onSignInClose();
        this.setState({ email: '', password: '' })
    };

    onInputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { classes, onClose, selectedValue, t, ...other } = this.props;

        return (
            <Dialog onClose={this.props.onSignInClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
                <form className={classes.signIn}
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.handleClose();
                    }}>
                    <PeopleIcon className={classes.icon} color="white" />
                    <ListSubheader component="div" className={classes.subHeader}>HOMEBINE</ListSubheader>
                    <Input variant="outlined"
                        lefticon={<EmailIcon style={{ color: "white" }} />}
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onInputChangeHandler}
                    />
                    <Input variant="outlined"
                        lefticon={<PasswordIcon style={{ color: "white" }} />}
                        placeholder={t('labels.password')}
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onInputChangeHandler}
                    />
                    <Button type="submit" onClick={() => this.handleClose()}>{t('buttons.logIn')}</Button>
                    <Button onClick={this.handleGoogleClose}>{t('buttons.google')}</Button>
                    <Button onClick={this.handleFacebookClose}>{t('buttons.facebook')}</Button>
                </form>
            </Dialog>
        );
    }
}

/* const signInDialog = (props) => {
    const { classes, onSignInClose, ...other } = props;

    return (
        <Dialog onClose={onSignInClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
            <form className={classes.signIn}
                onSubmit={(e) => {
                    e.preventDefault();
                    on
                }}>
                <PeopleIcon className={classes.icon} style={{ color: "white" }} />
                <ListSubheader component="div" className={classes.subHeader}>HOMEBINE</ListSubheader>
                <SignInFields onSignInClose={onSignInClose} />
            </form>
        </Dialog>
    )
}; */

const style = theme => ({
    signIn: {
        border: '2px solid rgba(230, 69, 126, 0.7)',
        backgroundColor: 'initial',
        backgroundImage: 'linear-gradient(-180deg, rgba(49, 39, 201, 0.7), rgba(230, 69, 126, 0.7))',
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

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
        googleSignIn: () => dispatch(googleSignIn()),
        facebookSignIn: () => dispatch(facebookSignIn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces("")(withStyles(style)(SignInDialog)));

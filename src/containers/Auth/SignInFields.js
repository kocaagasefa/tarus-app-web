import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/CustomButton';
import Input from '../../components/UI/CustomInput';
import {
    AlternateEmail as EmailIcon,
    VpnKey as PasswordIcon
} from '@material-ui/icons'
import { signInWithEmailAndPassword, googleSignIn, facebookSignIn } from '../../store/actions';
import { withNamespaces } from 'react-i18next';

class SignInFields extends Component {
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
        this.props.signInWithEmailAndPassword(this.state.email, this.state.password);
        this.props.onSignInClose();
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
        const { t } = this.props;

        return (
            <>
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
                <Button onClick={() => this.handleClose()}>{t('buttons.logIn')}</Button>
                <Button onClick={this.handleGoogleClose}>{t('buttons.google')}</Button>
                <Button onClick={this.handleFacebookClose}>{t('buttons.facebook')}</Button>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
        googleSignIn: () => dispatch(googleSignIn()),
        facebookSignIn: () => dispatch(facebookSignIn())
    }
}

export default connect(null, mapDispatchToProps)(withNamespaces("")(SignInFields));
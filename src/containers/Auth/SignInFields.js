import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/UI/CustomButton';
import Input from '../../components/UI/CustomInput';
import {
    AlternateEmail as EmailIcon,
    VpnKey as PasswordIcon
} from '@material-ui/icons'
import { signInWithEmailAndPassword, googleSignIn, facebookSignIn } from '../../store/actions';

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
        signInWithEmailAndPassword(this.state.email, this.state.password);
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

    render() {
        return (
            <>
                <Input variant="outlined"
                    lefticon={<EmailIcon style={{ color: "white" }} />}
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <Input variant="outlined"
                    lefticon={<PasswordIcon style={{ color: "white" }} />}
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <Button clickedHandler={this.handleClose}>Login</Button>
                <Button clickedHandler={this.handleGoogleClose}>Login with Google</Button>
                <Button clickedHandler={this.handleFacebookClose}>Login with Facebook</Button>
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

export default connect(null, mapDispatchToProps)(SignInFields);
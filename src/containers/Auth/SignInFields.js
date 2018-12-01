import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, TextField, Button } from '@material-ui/core';
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
        const { classes } = this.props;

        return (
            <>
                <TextField className={classes.textBox}
                    id="email"
                    variant="outlined"
                    margin="dense"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                >
                </TextField>
                <TextField className={classes.textBox}
                    id="password"
                    variant="outlined"
                    margin="dense"
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <Button variant="outlined" className={classes.button}
                    onClick={() => this.handleClose()}>
                    Login
                </Button>
                <Button variant="outlined" className={classes.button}
                    onClick={this.handleGoogleClose}>
                    Login with Google
                </Button>
                <Button variant="outlined" className={classes.button}
                    onClick={this.handleFacebookClose}>
                    Login with Facebook
                </Button>
            </>
        );
    }
}

const style = theme => ({
    textBox: {
        margin: '1em',
        display: 'flex',
        borderRadius: '10px',
        backgroundColor: '#f3f3f3',
    },
    button: {
        width: '95%',
        marginLeft: '1em',
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        borderRadius: '10px',
        backgroundColor: '#f3f3f3'
    },
})

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
        googleSignIn: () => dispatch(googleSignIn()),
        facebookSignIn: () => dispatch(facebookSignIn())
    }
}

export default connect(null, mapDispatchToProps)(withStyles(style)(SignInFields));
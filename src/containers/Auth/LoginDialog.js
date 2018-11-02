import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Dialog, DialogTitle } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { signInWithEmailAndPassword, googleSignIn, facebookSignIn } from '../../store/actions';

class LoginDialog extends Component {
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
        this.props.onClose();
        this.setState({email: '', password: ''})
    };

    handleGoogleClose = () => {
        this.props.googleSignIn();
        this.props.onClose();
        this.setState({email: '', password: ''})
    };

    handleFacebookClose = () => {
        this.props.facebookSignIn();
        this.props.onClose();
        this.setState({email: '', password: ''})
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.handleClose} aria-labelledby="login-title" {...other}>
                <DialogTitle id="login-title" style={{textAlign: 'center'}}>HomeBine</DialogTitle>
                <div>
                    <TextField className={classes.textBox}
                        id="email"
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <TextField className={classes.textBox}
                        id="password"
                        variant="outlined"
                        margin="dense"
                        label="Password"
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
                </div>
            </Dialog>
        );
    }
}

const style = theme => ({
    textBox: {
        margin: '1em',
        display: 'flex',
    },
    button: {
        marginLeft: '1em',
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
        googleSignIn: () => dispatch(googleSignIn()),
        facebookSignIn: () => dispatch(facebookSignIn())
    }
}

export default connect(null, mapDispatchToProps)(withStyles(style)(LoginDialog));

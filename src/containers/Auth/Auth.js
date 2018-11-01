import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, TextField, CardContent, Button } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { signInWithEmailAndPassword, signOut } from '../../store/actions';

class Auth extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
		this.setState({
            [event.target.name]: event.target.value
        })
	}

    render() {
        const { classes } = this.props
        return (
            <form className={classes.login} autoComplete="off">
                <MuiThemeProvider theme={theme}>
                    <Card className={classes.loginCard}>
                        <CardContent>
                            <TextField className={classes.textBox}
                                id="outlined-name"
                                variant="outlined"
                                margin="normal"
                                label="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <TextField className={classes.textBox}
                                id="outlined-name"
                                variant="outlined"
                                margin="normal"
                                label="Password"
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <Button variant="outlined" className={classes.button}
                                onClick={() => this.props.signInWithEmailAndPassword(this.state.email, this.state.password)}>
                                Login
                            </Button>
                            <Button variant="outlined" className={classes.button}>
                                Sign in with Google
                            </Button>
                            <Button variant="outlined" className={classes.button}>
                                Sign in with Facebook
                            </Button>
                        </CardContent>
                    </Card>
                </MuiThemeProvider>
            </form>
        )
    }
}

const theme = createMuiTheme({
    palette: {
        primary: { 500: '#4A004A' }
    }
});

const style = theme => ({
    login: {
        backgroundColor: '#4A004A',
        height: '100vh',
        justifyContent: 'center',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    loginCard: {
        // backgroundColor: '#9F009F',
        // border: '2px solid #6C046C',
        display: 'flex',
        width: '30%',
        height: '50%',
        justifyContent: 'center'
    },
    textBox: {
        marginLeft: 'auto',
        width: '100%',
        display: 'flex',
        // backgroundColor: '#f3f3f3',
        borderRadius: '5px',
        textColor: 'white'
    },
    button: {
        backgroundColor: '#f3f3f3',
        width: '100%',
        marginTop: '20px'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(withStyles(style)(Auth));
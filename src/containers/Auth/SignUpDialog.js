import React, { Component } from 'react';
import { Dialog, Card, TextField, withStyles, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';

class SignUpDialog extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        name: "",
        surname: "",
        accept: false
    }

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.props.onSignUpClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
                <Card className={classes.signIn}>
                    <PersonAddIcon className={classes.icon} color="white" />
                    <TextField className={classes.textBox}
                        id="email"
                        variant="outlined"
                        margin="dense"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <TextField className={classes.textBox}
                        id="password"
                        variant="outlined"
                        margin="dense"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <TextField className={classes.textBox}
                        id="password2"
                        variant="outlined"
                        margin="dense"
                        placeholder="Password(again)"
                        name="password2"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <TextField className={classes.textBox}
                        id="name"
                        variant="outlined"
                        margin="dense"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <TextField className={classes.textBox}
                        id="surname"
                        variant="outlined"
                        margin="dense"
                        placeholder="Surname"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleChange}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.accept}
                                value="accept"
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                            />
                        }
                        label="Accept the user agreement"
                    />
                    <Button variant="outlined" className={classes.button}
                        onClick={this.handleFacebookClose} disabled={!this.state.accept}>
                        SIGN UP
                </Button>
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
    },
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
    root: {
        color: green[600],
        '&$checked': {
            color: green[500],
        },
    },
    checked: {},
})

export default withStyles(style)(SignUpDialog);

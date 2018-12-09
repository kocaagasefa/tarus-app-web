import React, { Component } from 'react';
import { Dialog, Card, withStyles, FormControlLabel, Checkbox } from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { 
    PersonAddOutlined as PersonAddIcon,
    AlternateEmailOutlined as EmailIcon,
    VpnKeyOutlined as PasswordIcon

} from '@material-ui/icons';
import Input from '../../components/UI/CustomInput';
import Button from '../../components/UI/CustomButton';

class SignUpDialog extends Component {
    state = {
        email: "",
        password: "",
        password2: "",
        name: "",
        surname: "",
        accept: true
    }
    handleChange = (event) => {
        const { name,value,checked } = event.target;
        this.setState({
            [name]: checked ||value  
        })
    }

    render() {
        const { classes, onClose, selectedValue, ...other } = this.props;

        return (
            <Dialog onClose={this.props.onSignUpClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
                <Card className={classes.signIn}>
                    <PersonAddIcon className={classes.icon} color="white" />
                    <Input 
                        lefticon={<EmailIcon style={{color:"white"}}/>}
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <Input 
                        lefticon = {<PasswordIcon style={{color:"white"}}/>}
                        placeholder="Password"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <Input
                        lefticon = {<PasswordIcon style={{color:"white"}}/>}
                        placeholder="Password(again)"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.handleChange}
                    />
                    <Input
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <Input 
                        placeholder="Surname"
                        name="surname"
                        value={this.state.surname}
                        onChange={this.handleChange}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.accept}
                                name="accept"
                                onChange={this.handleChange}
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

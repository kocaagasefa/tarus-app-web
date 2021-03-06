import React, { Component } from 'react';
import { Dialog, withStyles, FormControlLabel, Checkbox } from '@material-ui/core';
import {
    PersonAddOutlined as PersonAddIcon,
    AlternateEmailOutlined as EmailIcon,
    VpnKeyOutlined as PasswordIcon
} from '@material-ui/icons';
import Input from '../../components/UI/CustomInput';
import Button from '../../components/UI/CustomButton';
import { signUp } from '../../store/actions';
import { connect } from 'react-redux';
import { formDataUpdate } from '../../helpers/validate';
import { withNamespaces } from 'react-i18next';

class SignUpDialog extends Component {
    state = {
        form: {
            email: {
                isValid: false,
                touched: false,
                value: "",
                validityRules: {
                    isEmail: true
                },
            },
            password: {
                isValid: false,
                touched: false,
                value: "",
                validityRules: {
                    minLength: 6
                }
            },
            confirmPassword: {
                isValid: false,
                touched: false,
                value: "",
                validityRules: {
                    equalTo: ""
                }
            },
            name: {
                isValid: false,
                touched: false,
                value: "",
                validityRules: {
                    minLength: 2
                },
            },
            surname: {
                isValid: false,
                touched: false,
                value: "",
                validityRules: {
                    minLength: 2
                }
            },
            accept: {
                isValid: false,
                value: false,
                validityRules: {
                    equalTo: true
                }
            }

        },
        accept: true
    }

    handleChange = (event) => {
        const { name, value, checked } = event.target;
        this.setState(prevState => {
            return {
                form: formDataUpdate(prevState.form, checked || value, name)
            }
        })
    }

    handleSignUp = () => {
        const [email, password, name, surname] = ["email", "password", "name", "surname"].map(key => this.state.form[key].value)
        this.props.signUp({
            email, password, name, surname
        })
            .then(data => data && data.success && this.props.onSignUpClose())
    }

    checkFormValidity = () => Object.keys(this.state.form).map(key => this.state.form[key].isValid).every(element => element)

    render() {
        const { classes, onSignUpClose, signUp, t, ...other } = this.props;
        const { email, password, confirmPassword, name, surname } = this.state.form;
        return (
            <Dialog onClose={onSignUpClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
                <form className={classes.signIn}
                    onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSignUp()
                    }}>
                    <PersonAddIcon className={classes.icon} color="primary" />
                    <Input
                        lefticon={<EmailIcon style={{ color: "white" }} />}
                        placeholder="Email"
                        name="email"
                        value={email.value}
                        onChange={this.handleChange}
                        invalid={!email.isValid && email.touched}
                    />
                    <Input
                        lefticon={<PasswordIcon style={{ color: "white" }} />}
                        placeholder={t('labels.password')}
                        name="password"
                        type="password"
                        value={password.value}
                        onChange={this.handleChange}
                        invalid={!password.isValid && password.touched}
                    />
                    <Input
                        lefticon={<PasswordIcon style={{ color: "white" }} />}
                        placeholder={t('labels.confirmPassword')}
                        name="confirmPassword"
                        type="password"
                        value={confirmPassword.value}
                        onChange={this.handleChange}
                        invalid={!confirmPassword.isValid && confirmPassword.touched}
                    />
                    <Input
                        placeholder={t('labels.name')}
                        name="name"
                        value={name.value}
                        onChange={this.handleChange}
                        invalid={!name.isValid && name.touched}
                    />
                    <Input
                        placeholder={t('labels.surname')}
                        name="surname"
                        value={surname.value}
                        onChange={this.handleChange}
                        invalid={!surname.isValid && surname.touched}
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={this.state.form.accept.value}
                                name="accept"
                                onChange={this.handleChange}
                                classes={{
                                    root: classes.root,
                                    checked: classes.checked,
                                }}
                                iconStyle={{ fill: 'white' }}
                            />
                        }
                        label="Accept the user agreement"
                    />
                    <Button
                        type="submit"
                        variant="outlined"
                        disabled={!this.checkFormValidity()}
                        onClick={this.handleSignUp} >
                        {t('buttons.signUp')}
                    </Button>
                </form>
            </Dialog>
        );
    }
}

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
    },
    textBox: {
        margin: '1em',
        display: 'flex',
        borderRadius: '10px',
        backgroundColor: '#f3f3f3',
    },
    root: {
        color: 'rgba(49, 39, 201, 0.7)',
        '&$checked': {
            color: 'rgba(49, 39, 201, 0.7)',
        },
    },
    checked: {},
})

const mapDispatchToProps = dispatch => {
    return {
        signUp: data => dispatch(signUp(data))
    }
}
export default connect(null, mapDispatchToProps)(withNamespaces("")(withStyles(style)(SignUpDialog)));

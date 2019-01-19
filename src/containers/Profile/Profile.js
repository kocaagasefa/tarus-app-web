import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, withStyles, Tooltip, Select, MenuItem } from '@material-ui/core';
import {
    AddAPhoto as PhotoIcon
} from '@material-ui/icons';
import { withNamespaces } from 'react-i18next';
import { DatePicker } from 'material-ui-pickers';
import PhoneInput from 'react-phone-number-input/';
import 'react-phone-number-input/style.css';
import Button from '../../components/UI/CustomButton';
import Input from '../../components/UI/CustomInput';
import Label from '../../components/UI/CustomLabel';
import { formDataUpdate } from '../../helpers/validate';
import { databaseRef, storageRef, auth } from '../../config/firebase';

class Profile extends Component {
    state = {
        form: {
            displayName: {
                isValid: true,
                value: this.props.user.displayName
            },
            email: {
                isValid: true,
                value: this.props.user.email,
                validityRules: {
                    isEmail: true,
                    required: true
                },
            },
            birthDate: {
                isValid: true,
                value: this.props.user.birthDate ? new Date(this.props.user.birthDate) : new Date(),
                validityRules: {
                    required: true
                }
            },
            job: {
                isValid: true,
                value: this.props.user.job
            },
            phone: {
                isValid: true,
                value: this.props.user.phone,
            },
            profilePhoto: {
                isValid: true,
                value: ""
            }
        }
    }

    componentDidMount() {
        console.log(Date(this.props.user.birthDate))
        console.log(this.props.user)
    }

    thirdPartyInputChangedHandler = (value, name) => {
        this.setState(prevState => {
            return {
                form: formDataUpdate(prevState.form, value, name)
            };
        });
    };

    formElementChangedHandler = event => {
        debugger;
        let { name, value, files } = event.target;

        if (files) {
            const reader = new FileReader();
            reader.onload = event =>
                this.setState(prevState => {
                    return {
                        form: {
                            ...prevState.form,
                            profilePhoto: {
                                ...this.state.form.profilePhoto,
                                data: event.target.result
                            }
                        }
                    };
                });
            reader.readAsDataURL(files[0]);
        }

        this.setState(prevState => {
            return {
                form: formDataUpdate(prevState.form, value, name)
            };
        });
    };

    saveBtnClicked = () => {
        /* storageRef.child("/profile_photos/" + this.props.user.uid + "/profilePhoto.jpg")
            .putString(this.state.form.profilePhoto.data, "data_url").then(snapshot => {
                snapshot.ref.getDownloadURL().then(function (url) {
                    debugger;
                    return auth.currentUser.updateProfile({
                        photoURL: url
                    })
                })
            }) */

        const user = {
            phone: this.state.form.phone.value,
            birthDate: this.state.form.birthDate.value.getTime(),
            job: this.state.form.job.value
        };
        databaseRef.child('users/' + this.props.user.uid).set(user)
    }

    checkFormValidity = () => Object.keys(this.state.form).map(key => this.state.form[key].isValid).every(element => element)

    render() {
        const { classes, user, t } = this.props;

        return (
            <div className={classes.flex}>
                <div className={classes.leftSide}>
                    <h1 className={classes.pageTitle}>{t('profilePage.profileTitle')}</h1>
                    <p className={classes.leftContent}>
                        {t('profilePage.profileContent')}
                    </p>
                    <img alt="profile" src={require('../../assets/profile.png')} />
                </div>
                <div className={classes.rightSide}>
                    <input id="profilePhoto"
                        type="file"
                        name="profilePhoto"
                        className={classes.hiddenInput}
                        value={this.state.form.profilePhoto.value}
                        onChange={this.formElementChangedHandler} />
                    <label htmlFor="profilePhoto" className={classes.center}>
                        <Tooltip title={t('profilePage.addPhoto')} placement="bottom-end">
                            <Avatar style={{ width: 200, height: 200, backgroundColor: '#f3f3f3', color: 'black' }} src={this.state.form.profilePhoto.data} alt="profile">
                                <PhotoIcon className={classes.profilePhoto} />
                            </Avatar>
                        </Tooltip>
                    </label>
                    <Label>{t('profilePage.displayName')}</Label>
                    <Input disabled value={this.props.user.displayName ? this.props.user.displayName : ""} />
                    <Label>E-Mail</Label>
                    <Input value={this.state.form.email.value} name="email" onChange={this.formElementChangedHandler} />
                    <Label>{t('profilePage.birthDate')}</Label>
                    <DatePicker className={classes.thirdPartyInput}
                        keyboard
                        clearable
                        format="dd/MM/yyyy"
                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        value={this.state.form.birthDate.value}
                        onChange={val => this.thirdPartyInputChangedHandler(val, "birthDate")}
                        animateYearScrolling={false}></DatePicker>
                    <Label>{t('profilePage.job')}</Label>
                    <Select className={classes.thirdPartyInput}
                        value={this.state.form.job.value}
                        onChange={this.formElementChangedHandler}
                        name="job"
                        inputProps={{
                            id: 'job-required',
                        }}
                    >
                        <MenuItem value="none" disabled>
                            {t('general.selectJob')}
                        </MenuItem>
                        {t('jobs', { returnObjects: true }).map(({ value, text }) => (
                            <MenuItem key={value} value={value}>{text}</MenuItem>
                        ))}
                    </Select>
                    <Label>{t('profilePage.phoneNumber')}</Label>
                    <PhoneInput className={classes.thirdPartyInput}
                        placeholder={t('profilePage.phoneNumber')}
                        value={this.state.form.phone.value}
                        onChange={val => this.thirdPartyInputChangedHandler(val, "phone")} />
                    <Button className={classes.btn}
                        disabled={!this.checkFormValidity()}
                        onClick={this.saveBtnClicked}>{t('general.save')}</Button>
                </div>
            </div>
        );
    }
}

const styles = theme => ({
    flex: {
        display: 'flex',
    },
    leftSide: {
        width: '50%',
        height: '100vh',
        marginLeft: theme.spacing.unit * 2
    },
    rightSide: {
        width: '50%',
        height: '100vh',
        backgroundImage: 'linear-gradient(-180deg, #3127c9 0%, #e6457e 100%)',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: theme.spacing.unit * 3
    },
    thirdPartyInput: {
        margin: theme.spacing.unit
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pageTitle: {
        color: '#9927B1'
    },
    leftContent: {
        fontSize: theme.spacing.unit * 4,
        color: 'gray',
        width: '90%'
    },
    profilePhoto: {
        width: '100%',
        height: '20%'
    },
    hiddenInput: {
        display: 'none'
    },
    btn: {
        backgroundColor: '#f3f3f3',
        margin: theme.spacing.unit
    }
})

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps, null)(withNamespaces("common")(withStyles(styles)(Profile)));
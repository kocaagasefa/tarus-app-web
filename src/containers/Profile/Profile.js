import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, withStyles, Tooltip, MenuItem } from '@material-ui/core';
import {
    AddAPhoto as PhotoIcon
} from '@material-ui/icons';
import Regions from '../../helpers/regions';
import { withNamespaces } from 'react-i18next';
import 'react-phone-number-input/style.css';
import Button from '../../components/UI/CustomButton';
import Input from '../../components/UI/CustomInput';
import Select from '../../components/UI/CustomSelect';
import PhoneInput from '../../components/UI/CustomPhone';
import CustomDate from '../../components/UI/CustomDate';
import { formDataUpdate } from '../../helpers/validate';
import { databaseRef } from '../../config/firebase';
import { updateProfilePhoto } from '../../store/actions/profile';

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
            country: {
                isValid: true,
                value: this.props.user.country
            },
            city: {
                isValid: true,
                value: this.props.user.city
            },
            phone: {
                isValid: true,
                value: this.props.user.phone,
            },
            profilePhoto: {
                isValid: true,
                value: ""
            },
            photoURL: {
                isValid: true,
                value: this.props.user.photoURL
            }
        }
    }

    thirdPartyInputChangedHandler = (value, name) => {
        this.setState(prevState => {
            return {
                form: formDataUpdate(prevState.form, value, name)
            };
        });
    };

    formElementChangedHandler = event => {
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

    updateProfileState = () => {
        const user = {
            phone: this.state.form.phone.value,
            birthDate: this.state.form.birthDate.value.getTime(),
            job: this.state.form.job.value,
            country: this.state.form.country.value,
            city: this.state.form.city.value
        };
        databaseRef.child('users/' + this.props.user.uid).set(user);
    }

    saveBtnClicked = () => {
        if (this.state.form.profilePhoto && this.state.form.profilePhoto.touched) {
            this.props.updateProfilePhoto(this.state.form.profilePhoto, this.props.user.uid)
                .then(resp => {
                    this.updateProfileState();
                })
        }
        else {
            this.updateProfileState();
        }
    }

    checkFormValidity = () => Object.keys(this.state.form).map(key => this.state.form[key].isValid).every(element => element)

    render() {
        const { classes, t } = this.props;

        return (
            <div className={classes.flex}>
                <div className={classes.leftSide}>
                    <h1 className={classes.pageTitle}>{t('profilePage.profileTitle')}</h1>
                    <p className={classes.leftContent}>
                        {t('profilePage.profileContent')}
                    </p>
                    <img alt="profile" src={require('../../assets/profile.png')} />
                </div>
                <div className={classes.leftBlank}></div>
                <div className={classes.rightSide}>
                    <input id="profilePhoto"
                        type="file"
                        name="profilePhoto"
                        className={classes.hiddenInput}
                        value={this.state.form.profilePhoto.value}
                        onChange={this.formElementChangedHandler} />
                    <label htmlFor="profilePhoto" className={classes.center}>
                        <Tooltip title={t('profilePage.addPhoto')} placement="bottom-end">
                            <Avatar style={{ width: '10em', height: '10em', backgroundColor: '#f3f3f3', color: 'black' }} alt="profilePhoto"
                                src={this.state.form.profilePhoto.value ? this.state.form.profilePhoto.data : this.props.user.photoURL}>
                                <PhotoIcon className={classes.profilePhoto} />
                            </Avatar>
                        </Tooltip>
                    </label>
                    <br />
                    <br />
                    <Input disabled
                        value={this.props.user.displayName ? this.props.user.displayName : ""}
                        label="profilePage.displayName" />
                    <Input value={this.state.form.email.value}
                        name="email"
                        onChange={this.formElementChangedHandler}
                        label="profilePage.email" />
                    <Select label="profilePage.country"
                        value={this.state.form.country.value}
                        onChange={this.formElementChangedHandler}
                        name="country">
                        {Regions.map((country) => (
                            <MenuItem key={country[0]} value={country[0]}>{country[0]}</MenuItem>
                        ))}
                    </Select>
                    {
                        this.state.form.country.value &&
                        <Select label="profilePage.city"
                            value={this.state.form.city.value}
                            onChange={this.formElementChangedHandler}
                            name="city">
                            {
                                Regions.filter(region => {
                                    return region[0] === this.state.form.country.value
                                })[0][2].split("|").map(elem => {
                                    var city = elem.split("~");
                                    return <MenuItem key={city[1]} value={city[0]}>{city[0]}</MenuItem>
                                })
                            }
                        </Select>
                    }
                    <CustomDate className={classes.thirdPartyInput}
                        label="profilePage.birthDate"
                        keyboard
                        clearable
                        format="dd/MM/yyyy"
                        mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                        value={this.state.form.birthDate.value}
                        onChange={val => this.thirdPartyInputChangedHandler(val, "birthDate")}
                        animateYearScrolling={false}></CustomDate>
                    <Select className={classes.thirdPartyInput}
                        value={this.state.form.job.value}
                        onChange={this.formElementChangedHandler}
                        name="job"
                        label="profilePage.job"
                    >
                        <MenuItem value="none" disabled>
                            {t('general.selectJob')}
                        </MenuItem>
                        {t('jobs', { returnObjects: true }).map(({ value, text }) => (
                            <MenuItem key={value} value={value}>{text}</MenuItem>
                        ))}
                    </Select>
                    <PhoneInput defaultCountry='tr'
                        regions={'europe'}
                        label="profilePage.phoneNumber"
                    />
                    {/* <PhoneInput className={classes.thirdPartyInput}
                        placeholder={t('profilePage.phoneNumber')}
                        value={this.state.form.phone.value}
                        onChange={val => this.thirdPartyInputChangedHandler(val, "phone")} /> */}
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
        marginLeft: theme.spacing.unit * 2,
        position:"fixed",
        top:0,
        left:0
    },
    leftBlank:{

        width: '50%',
        height: '100vh',
    },
    rightSide: {
        width: '50%',
        backgroundImage: 'linear-gradient(-180deg, rgba(49, 39, 201, 0.7), rgba(230, 69, 126, 0.7))',
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

const mapDispatchToProps = dispatch => {
    return {
        updateProfilePhoto: (photo, uid) => dispatch(updateProfilePhoto(photo, uid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces("common")(withStyles(styles)(Profile)));
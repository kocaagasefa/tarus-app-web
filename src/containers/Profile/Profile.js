import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar, withStyles, Tooltip, TextField, Select, MenuItem, FormLabel } from '@material-ui/core';
import {
    AddAPhoto as PhotoIcon
} from '@material-ui/icons';
import { withNamespaces } from 'react-i18next';
import { DatePicker } from 'material-ui-pickers';
import PhoneInput from 'react-phone-number-input/';
import 'react-phone-number-input/style.css';
import Button from '../../components/UI/CustomButton';


class Profile extends Component {
    state = {
        selectedDate: new Date(),
        phone: null,
        job: "none"
    }

    componentDidMount() {
        console.log("user profile", this.props.user);
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { classes, user, t } = this.props;
        return (
            <div className={classes.main}>
                <div className={classes.row}>
                    <input id="profilePhoto" type="file" className={classes.hiddenInput} />
                    <label htmlFor="profilePhoto">
                        <Tooltip title={t('profilePage.addPhoto')} placement="right-bottom">
                            <Avatar htmlFor="profilePhoto" style={{ width: 400, height: 400 }} src={user.photoURL} alt="profile">
                                <PhotoIcon className={classes.profilePhoto} />
                            </Avatar>
                        </Tooltip>
                    </label>
                </div>
                <div className={classes.row}>
                    <FormLabel>{t('profilePage.birthDate')}</FormLabel>
                    <DatePicker
                        keyboard
                        clearable
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}
                        animateYearScrolling={false}
                        minDate={new Date()}></DatePicker>
                </div>
                <div className={classes.row}>
                    <FormLabel>{t('profilePage.displayName')}</FormLabel>
                    <Tooltip title={t('profilePage.displayName')} placement="right-end">
                        <TextField value={user.displayName} disabled />
                    </Tooltip>
                </div>
                <div className={classes.row}>
                    <FormLabel>E-Mail</FormLabel>
                    <Tooltip title="Email" placement="right-end">
                        <TextField value={user.email} disabled />
                    </Tooltip>
                </div>
                <div className={classes.row}>
                    <FormLabel>{t('profilePage.phoneNumber')}</FormLabel>
                    <PhoneInput
                        placeholder={t('profilePage.phoneNumber')}
                        value={this.state.phone}
                        onChange={phone => this.setState({ phone })} />
                </div>
                <div className={classes.row}>
                    <FormLabel>{t('profilePage.job')}</FormLabel>
                    <Select
                        value={this.state.job}
                        onChange={this.handleChange}
                        name="job"
                        inputProps={{
                            id: 'job-required',
                        }}
                    >
                        <MenuItem value="none" disabled>
                            {t('general.selectJob')}
                        </MenuItem>
                        {t('jobs', { returnObjects: true }).map(({ value, text }) => (
                            <MenuItem value={value}>{text}</MenuItem>
                        ))}
                    </Select>
                </div>
                <Button className={classes.row}>Kaydet</Button>
            </div >
        );
    }
}

const styles = theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: theme.spacing.unit * 2
    },
    row: {
        marginTop: theme.spacing.unit * 4,
        display: 'flex',
        flexDirection: 'column',
        width: '30%'
    },
    profilePhoto: {
        width: '100%',
        height: '20%'
    },
    avatar: {
        width: '25%',
        height: '25%'
    },
    hiddenInput: {
        display: 'none'
    }
})

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps, null)(withNamespaces("common")(withStyles(styles)(Profile)));
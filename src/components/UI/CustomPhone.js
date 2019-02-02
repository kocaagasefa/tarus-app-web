import React from 'react';
import { withStyles } from '@material-ui/core';
//import PhoneInput from 'react-phone-number-input/';
import PhoneInput from 'react-phone-input-2';
import Label from './CustomLabel';
import { withNamespaces } from 'react-i18next';

const customPhone = props => {
    const { container, classes, containerStyle, invalid, t, label, ...others } = props;

    return (
        <div className={classes.customPhone}>
            <Label>{t('profilePage.' + label)}</Label>
            <div className={classes.container + " " + (invalid ? classes.invalid : "")}
                style={containerStyle}>
                <PhoneInput {...others}
                    inputStyle={{
                        backgroundColor: "rgba(255,255,255,.0)",
                        width: '100%',
                        border: 'none'
                    }}
                    buttonStyle={{
                        backgroundColor: "rgba(255,255,255,.0)",
                        border: 'none'
                    }}
                    enableSearchField='true'></PhoneInput>
            </div>
        </div>
    );
}

const style = theme => ({
    container: {
        border: "1px solid #9927B1",
        borderRadius: theme.spacing.unit,
        backgroundColor: "rgba(255,255,255,.1)",
        padding: theme.spacing.unit,
        display: "flex",
        alignItems: "center",
        margin: theme.spacing.unit
    },
    customPhone: {
        marginTop: theme.spacing.unit * 2
    },
    invalid: {
        borderColor: "red"
    }
});

export default withNamespaces("")(withStyles(style)(customPhone))
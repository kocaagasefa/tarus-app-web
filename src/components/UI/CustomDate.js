import React from 'react';

import { withStyles } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';
import Label from './CustomLabel';
import { withNamespaces } from 'react-i18next';

const customDate = props => {
    const { container, classes, containerStyle, invalid, t, label, ...others } = props;
    return (
        <div className={classes.customDate}>
            { label && <Label>{t(label)}</Label> }
            <div className={classes.container + " " + (invalid ? classes.invalid : "")}
                style={containerStyle}>
                <DatePicker {...others}
                    className={props.classes.date}></DatePicker>
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
    customDate: {
        marginTop: theme.spacing.unit * 2
    },
    date: {
        color: "white",
        width: "100%",
        boxSizing: "border-box",
        padding: "3px 0"
    },
    invalid: {
        borderColor: "red"
    }

});

export default withNamespaces("")(withStyles(style)(customDate))
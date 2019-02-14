import React from 'react';
import { withStyles } from '@material-ui/core';
import Select from 'react-select';
import Label from './CustomLabel';
import { withNamespaces } from 'react-i18next';

const customSelect = props => {
    const { container, classes, containerStyle, invalid, t, label, ...others } = props;

    const colorStyle = ({
        control: styles => ({
            ...styles,
            border: "1px solid #9927B1",
            borderRadius: props.theme.spacing.unit,
            backgroundColor: "rgba(255,255,255,.1)",
            padding: props.theme.spacing.unit * 2,
            display: "flex",
            alignItems: "center",
            margin: props.theme.spacing.unit,
        }),
        option: styles => ({
            ...styles,
            padding: props.theme.spacing.unit * 2,
            display: "flex",
            alignItems: "center",
        })
    });

    return (
        <div className={classes.customSelect}>
            {label && <Label>{t(label)}</Label>}
            <Select {...others} styles={colorStyle} isClearable/>
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
    customSelect: {
        marginTop: theme.spacing.unit * 2
    },
    select: {
        color: "white",
        width: "100%",
        boxSizing: "border-box",
        padding: "3px 0"
    },
    invalid: {
        borderColor: "red"
    }

});

export default withNamespaces("")(withStyles(style, { withTheme: true })(customSelect));
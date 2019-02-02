import React from 'react';

import { InputBase, withStyles, Select } from '@material-ui/core';
import Label from './CustomLabel';
import { withNamespaces } from 'react-i18next';

const customInput = props => {
    const { container, lefticon, classes, containerStyle, invalid, type, t, label, ...others } = props;

    return (
        <div className={classes.customInput}>
            <Label>{t('profilePage.' + label)}</Label>
            <div className={classes.container + " " + (invalid ? classes.invalid : "")}
                style={containerStyle}>
                {lefticon}
                {type === "select" ?
                    <Select {...others}
                        className={[props.classes.input, props.lefticon && props.classes.inputWithIcon].join(" ")} />
                    :
                    <InputBase
                        {...others} type={type}
                        className={[props.classes.input, props.lefticon && props.classes.inputWithIcon].join(" ")} />}
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
    input: {
        color: "white",
        width: "100%",
        boxSizing: "border-box",
        padding: "3px 0"
    },
    customInput: {
        marginTop: theme.spacing.unit * 2
    },
    inputWithIcon: {
        paddingLeft: theme.spacing.unit,
        borderLeft: `1px solid #9927B1`,
        marginLeft: theme.spacing.unit
    },
    invalid: {
        borderColor: "red"
    }

});

export default withNamespaces("common")(withStyles(style)(customInput))
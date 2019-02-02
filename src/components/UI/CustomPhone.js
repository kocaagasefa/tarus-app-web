import React from 'react';
import { withStyles } from '@material-ui/core';
//import PhoneInput from 'react-phone-number-input/';
import PhoneInput from 'react-phone-input-2';

const customPhone = props => {
    const { container, classes, containerStyle, invalid, ...others } = props;
    debugger;
    return (
        <div className={classes.container + " " + (invalid ? classes.invalid : "")}
            style={containerStyle}>
            <PhoneInput {...others}
                inputStyle={{
                    backgroundColor: "rgba(255,255,255,.0)",
                    width: '100%',
                    border: 'none'
                }}
                enableSearchField='true'></PhoneInput>
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
    invalid: {
        borderColor: "red"
    }
});

export default withStyles(style)(customPhone)
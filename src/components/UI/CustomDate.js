import React from 'react';

import { withStyles } from '@material-ui/core';
import { DatePicker } from 'material-ui-pickers';

const customDate = props => {
    const { container, classes, containerStyle, invalid, ...others } = props;
    return (
        <div className={classes.container + " " + (invalid ? classes.invalid : "")}
            style={containerStyle}>
            <DatePicker {...others}
                className={props.classes.date}></DatePicker>
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

export default withStyles(style)(customDate)
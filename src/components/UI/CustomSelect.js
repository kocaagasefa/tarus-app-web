import React from 'react';
import { Select, withStyles } from '@material-ui/core';

const customSelect = props => {
    const { container, classes, containerStyle, invalid, ...others } = props;
    return (
        <div className={classes.container + " " + (invalid ? classes.invalid : "")}
            style={containerStyle}>
            <Select {...others}
                className={classes.select}></Select>
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

export default withStyles(style)(customSelect)
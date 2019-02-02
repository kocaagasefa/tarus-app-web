import React from 'react';

import { FormLabel, withStyles } from '@material-ui/core';

const customLabel = (props) => {
    const { classes, ...others } = props;

    return (
        <FormLabel className={classes.lbl} {...others}>{props.children}</FormLabel>
    )
}

const style = theme => ({
    lbl: {
        marginLeft: theme.spacing.unit
    }
})

export default withStyles(style)(customLabel);
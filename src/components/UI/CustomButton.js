import React from 'react';

import { Button, withStyles } from '@material-ui/core';

const customButton = (props) => {
    const { classes } = props;

    return (
        <Button className={classes.button} onClick={props.clickedHandler}>{props.label}</Button>
    )
}

const style = theme => ({
    button: {
        width: '95%',
        marginLeft: '1em',
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        color: 'white',
        border: '1px solid #9927B1',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(-180deg, #31073D 0%, #9927B1 100%)'
    }
})

export default withStyles(style)(customButton);
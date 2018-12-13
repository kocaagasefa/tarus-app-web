import React from 'react';

import { Button, withStyles } from '@material-ui/core';

const customButton = (props) => {
    const { classes, ...others } = props;

    return (
        <Button className={classes.button+" "+(props.disabled?classes.disabled:"" )} {...others}  />
    )
}

const style = theme => ({
    button: {
        width: '97%',
        marginLeft: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '1',
        color: 'white',
        border: '1px solid #9927B1',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(-180deg, #31073D 0%, #9927B1 100%)'
    },
    disabled:{
        backgroundImage:"none",
        backgroundColor:"#7a7a7a"

    }
})

export default withStyles(style)(customButton);
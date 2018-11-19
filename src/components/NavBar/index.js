import React from 'react';
import { withStyles, FormLabel, Chip } from '@material-ui/core';

const navBar = props => {
    const { classes } = props;

    return (
        <div className={classes.navBar}>
            {
                props.user ?
                    <>
                        <Chip className={classes.content} label={props.user.email}></Chip>
                        <FormLabel className={classes.content} onClick={props.signOut}>Sign Out</FormLabel>
                    </>
                    :
                    <>
                        <FormLabel className={classes.content}>Sign Up</FormLabel>
                        <FormLabel className={classes.content} onClick={props.onSignInOpen}>Sign In</FormLabel>
                    </>
            }
    
        </div>
    )
};

const styles = theme => ({
    navBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        border: '1px solid ',
    },
    content: {
        margin: '1em',
        justifyContent: 'flex-end',
        textAlign: 'center',
        cursor: 'pointer'
    }
})

export default withStyles(styles)( navBar);
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
                        <FormLabel onClick={props.onSignInOpen} className={classes.content}>Giriş Yap</FormLabel>
                        <FormLabel disabled className={classes.contentDisable}> | </FormLabel>
                        <FormLabel onClick={props.onSignUpOpen} className={classes.content}>Kayıt Ol</FormLabel>
                    </>
            }
    
        </div>
    )
};

const styles = theme => ({
    navBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundImage: 'linear-gradient(-180deg, #380040 0%, #6F007F 100%)',
    },
    content: {
        margin: '1em',
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: '#f3f3f3',
        cursor: 'pointer'
    },
    contentDisable: {
        margin: '1em',
        justifyContent: 'flex-end',
        textAlign: 'center',
        color: '#f3f3f3',
    }
})

export default withStyles(styles)( navBar);
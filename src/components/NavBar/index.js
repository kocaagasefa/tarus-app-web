import React from 'react';
import { withStyles, FormLabel, Chip } from '@material-ui/core';

const navBar = props => {
    const { classes,t } = props;

    return (
        <div className={classes.navBar}>
            {
                props.user ?
                    <>
                        <Chip className={classes.content} label={props.user.email}></Chip>
                        <FormLabel className={classes.content} onClick={props.signOut}>{t('navbar.signout')}</FormLabel>
                    </>
                    :
                    <>
                        <FormLabel onClick={props.onSignInOpen} className={classes.content}>{t('navbar.signin')}</FormLabel>
                        <FormLabel disabled className={classes.contentDisable}> | </FormLabel>
                        <FormLabel onClick={props.onSignUpOpen} className={classes.content}>{t('navbar.signup')}</FormLabel>
                    </>
            }
                        <FormLabel className={classes.content+" "+ (props.lng==="en"?classes.activeLanguage:"")} onClick={()=>props.changeLanguage('en')}> EN </FormLabel>
                        
                        <FormLabel className={classes.content+" "+(props.lng==="tr"?classes.activeLanguage:"")} onClick={()=>props.changeLanguage('tr')}> TR </FormLabel>
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
    },
    activeLanguage:{
        fontWeight:"bold"
    }
})

export default withStyles(styles)( navBar);
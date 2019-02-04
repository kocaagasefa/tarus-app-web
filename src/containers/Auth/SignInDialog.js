import React from 'react';
import { Dialog, Card, ListSubheader, withStyles } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import SignInFields from './SignInFields';

const signInDialog = (props) => {
    const { classes, onSignInClose, ...other } = props;

    return (
        <Dialog onClose={onSignInClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
            <Card className={classes.signIn}>
                <PeopleIcon className={classes.icon} style={{ color: "white" }} />
                <ListSubheader component="div" className={classes.subHeader}>HOMEBINE</ListSubheader>
                <SignInFields onSignInClose={onSignInClose} />
            </Card>
        </Dialog>
    )
};

// class SignInDialog extends Component {
//     render() {
//         const { classes, onClose, selectedValue, ...other } = this.props;

//         return (
//             <Dialog onClose={this.props.onSignInClose} aria-labelledby="login-title" {...other} fullWidth={true} maxWidth={'sm'}>
//                 <Card className={classes.signIn}>
//                     <PeopleIcon className={classes.icon} color="white" />
//                     <ListSubheader component="div" className={classes.subHeader}>HOMEBINE</ListSubheader>
//                     <SignInFields />
//                 </Card>
//             </Dialog>
//         );
//     }
// }

const style = theme => ({
    signIn: {
        border: '2px solid rgba(230, 69, 126, 0.7)',
        backgroundColor: 'initial',
        backgroundImage: 'linear-gradient(-180deg, rgba(49, 39, 201, 0.7), rgba(230, 69, 126, 0.7))',
        textAlign: 'center',
        textColor: '#f3f3f3'
    },
    icon: {
        width: '20%',
        height: '20%',
        justifyContent: 'center',
        margin: 'auto',
        color: '#f3f3f3'
    },
    subHeader: {
        fontSize: '25px',
        color: 'white'
    }
})

export default withStyles(style)(signInDialog);

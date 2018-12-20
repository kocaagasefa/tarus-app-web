import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '../../components/UI/CustomButton';
import { withNamespaces } from 'react-i18next';
//import LandingCard from './LandingCard';

class Landing extends Component {
    panelClicked = (path) => {
        this.props.history.push(path)
    }

    render() {
        const { classes } = this.props;
        /* return (
            <div className={classes.landing}>
                <LandingCard name="houses" clicked={(path) => this.panelClicked('/houses')} content={this.props.t('homePage.homeContent')} />
                <LandingCard name="people" clicked={(path) => this.panelClicked('/roommates')} content={this.props.t('homePage.friendContent')}/>
            </div>
        ) */
        return (
            <div className={classes.landing}>
                <div className={classes.row}>
                    <img alt="home" src={require('../../assets/rent.png')} className={classes.img} />
                    <div className={classes.main}>
                        <h1 className={classes.homeTitle}>{this.props.t('homePage.homeTitle')}</h1>
                        <p className={classes.homeText}>
                            {this.props.t('homePage.homeContent')}
                            <Button className={classes.button} onClick={() => this.panelClicked('/houses')}>{this.props.t('homePage.btnHome')}</Button>
                        </p>
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.main}>
                        <h1 className={classes.homeTitle}>{this.props.t('homePage.friendTitle')}</h1>
                        <p className={classes.homeText}>
                            {this.props.t('homePage.friendContent')}
                            <Button className={classes.button} onClick={() => this.panelClicked('/roommates')}>{this.props.t('homePage.btnFriend')}</Button>
                        </p>
                    </div>
                    <img alt="friend" src={require('../../assets/friend.png')} style={{ width: '35%' }} />
                </div>
            </div>
        )
    }
}

/* const style = theme => ({
    landing: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center' ,
        justifyContent: 'center',
        flex: '1',
        backgroundColor: '#380040'
    }
}) */

const style = theme => ({
    main: {
        fontFamily: 'Segoe UI',
        margin: theme.spacing.unit * 2
    },
    homeText: {
        fontSize: theme.spacing.unit * 4,
        color: 'gray',
        width: '80%'
    },
    homeTitle: {
        color: '#9927B1'
    },
    landing: {
        display: 'flex',
        flexDirection: 'column',
        flex: '2',
        height: '100vh'
    },
    row: {
        display: 'flex',
        flex: '2',
        marginLeft: theme.spacing.unit * 5,
        marginRight: theme.spacing.unit * 5
    },
    button: {
        marginLeft: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        border: '1px solid #9927B1',
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(-180deg, #31073D 0%, #9927B1 100%)'
    },
    img: {
        width: '35%'
    }
})

export default withNamespaces()(withStyles(style)(Landing));
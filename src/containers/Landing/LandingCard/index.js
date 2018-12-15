import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import { CardContent, ListSubheader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Ionicon from 'react-ionicons';
import { withNamespaces } from 'react-i18next';

class LandingCard extends Component {
    panelClick = (path) => {
        this.props.history.push(path)
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card} onClick={this.props.clicked}>
                {
                    this.props.name === 'houses' ?
                        <Ionicon icon="ios-home-outline" className={classes.icon} color="white" /> :
                        <Ionicon icon="ios-people-outline" className={classes.icon} color="white" />
                }
                <ListSubheader component="div" className={classes.subHeader}>{this.props.t(this.props.name)}</ListSubheader>
                <CardContent>
                    {this.props.content}
                </CardContent>
            </Card >
        )
    }
}

const style = theme => ({
    card: {
        width: '25%',
        height: '80%',
        margin: '1em',
        textAlign: 'center',
        backgroundColor: 'initial',
        backgroundImage: 'linear-gradient(-180deg, #380040 0%, #6F007F 100%)',
        color: '#f3f3f3',
        cursor: 'pointer',
        borderRadius: '15px',
        border: '2px solid #6F007F'
    },
    icon: {
        width: '30%',
        height: '20%'
    },
    subHeader: {
        fontSize: '25px',
        color: 'white'
    }
})

export default withStyles(style)(withNamespaces("common")(LandingCard));
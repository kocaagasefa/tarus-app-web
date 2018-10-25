import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import { CardContent, ListSubheader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Ionicon from 'react-ionicons';
import './style.css';

class LandingCard extends Component {
    panelClick = (path) => {
        this.props.history.push(path)
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.card} onClick={this.props.clicked}>
                {this.props.name === 'EVLER' ? <Ionicon icon="ios-home-outline"  style={{height: '20%', width: '30%'}} color="white" /> : <Ionicon icon="ios-people-outline" style={{height: '20%', width: '30%'}} color="white" />}
                <ListSubheader component="div" style={{ fontSize: '25px', color: 'white' }}>{this.props.name}</ListSubheader>
                <CardContent style={{ height: '75%' }}>
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
        backgroundColor: '#9F009F',
        color: '#f3f3f3',
        cursor: 'pointer',
        borderRadius: '15px',
        border: '2px solid #6C046C'
    },

})

export default withStyles(style)(LandingCard);
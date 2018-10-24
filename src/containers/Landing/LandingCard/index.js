import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import './style.css';

class LandingCard extends Component {
    panelClick = (path) => {
        this.props.history.push(path)
    }

    render() {
        const { classes } = this.props;

        return (
            <Card className={classes.content} onClick={this.props.clicked}>
                <CardContent>
                    {this.props.name}
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card >
        )
    }
}

const style = theme => ({
    content: {
        width: '25%',
        margin: '1em',
        textAlign: 'center',
        backgroundColor: '#8C089F',
        color: '#f3f3f3',
        cursor: 'pointer'
    }
})

export default withStyles(style)(LandingCard);
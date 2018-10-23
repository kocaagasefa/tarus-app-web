import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './style.css';

class LandingCard extends Component {
    render() {
        return (
            <Card className="LandingCard-Content">
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

export default LandingCard;
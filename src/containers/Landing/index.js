import React, { Component } from 'react';
import LandingCard from './LandingCard';
import './LandingCard/style.css'

class Landing extends Component {
    panelClicked = (path) => {
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="Landing">
                <LandingCard name="EVLER" clicked={(path) => this.panelClicked('/houses')} />
                <LandingCard name="KİŞİLER" clicked={(path) => this.panelClicked('/roommates')} />
            </div>
        )
    }
}

export default Landing;
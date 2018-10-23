import React, { Component } from 'react';
import LandingCard from './LandingCard/LandingCard';
import './LandingCard/style.css'

class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <LandingCard name="Evler" />
                <LandingCard name="Kişiler" />
            </div>
        )
    }
}

export default Landing;
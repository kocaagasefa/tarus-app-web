import React, { Component } from 'react';
import LandingCard from './LandingCard';
import './LandingCard/style.css'

class Landing extends Component {
    render() {
        return (
            <div className="Landing">
                <LandingCard name="EVLER" />
                <LandingCard name="KİŞİLER" />
            </div>
        )
    }
}

export default Landing;
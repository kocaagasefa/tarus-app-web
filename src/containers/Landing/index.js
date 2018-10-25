import React, { Component } from 'react';
import LandingCard from './LandingCard';
import { withStyles } from '@material-ui/core/styles';
import './LandingCard/style.css';

class Landing extends Component {
    panelClicked = (path) => {
        this.props.history.push(path)
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.landing}>
                <LandingCard name="EVLER" clicked={(path) => this.panelClicked('/houses')} content={content.home} />
                <LandingCard name="KİŞİLER" clicked={(path) => this.panelClicked('/roommates')} content={content.roommates}/>
            </div>
        )
    }
}

const content = {
    home: 'Hemen seçebileceğin yüzlerce ev ilanına göz at ve ideal ev arkadaşınla yaşamaya başla',
    roommates: 'Beraber eve çıkabileceğin, tam da aradığın kişiler ile iletişime geç ve hayalindeki evi kur'
}

const style = theme => ({
    landing: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center' ,
        justifyContent: 'center',
        flex: '1',
        backgroundColor: '#4A004A'
    }
})

export default withStyles(style)(Landing);
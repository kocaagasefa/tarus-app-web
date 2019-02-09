import React from 'react';
import { withStyles } from '@material-ui/core';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Label from './CustomLabel';
import { withNamespaces } from 'react-i18next';

const customCountryCity = (props) => {
    const { classes, label, t } = props;
    console.log(CountryRegionData)
    return (
        <div className={classes.customCountryCity}>
            {label && <Label>{t(label)}</Label>}
            <div >
                <CountryDropdown classes={classes.container}
                    value={null} />
                <RegionDropdown className={classes.container}
                    country={null}
                    value={null} />
            </div>
        </div>
    )
}

const style = theme => ({
    customCountryCity: {
        marginTop: theme.spacing.unit * 2,
    },
    container: {
        border: "1px solid #9927B1",
        borderRadius: theme.spacing.unit,
        backgroundColor: "rgba(255,255,255,.1)",
        padding: theme.spacing.unit,
        margin: theme.spacing.unit,
        boxSizing: "border-box",
    },
    disabled: {
        backgroundImage: "none",
        backgroundColor: "#7a7a7a"
    }
})

export default withNamespaces("")(withStyles(style)(customCountryCity));
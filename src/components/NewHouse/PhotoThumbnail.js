import React, { Component } from 'react';
import Photo from '@material-ui/icons/Photo'
import { withStyles, Grid } from '@material-ui/core';



class PhotoThumbnail extends Component {
    state = {
        value: ""
    }
    selectPhoto = (event) => {
        let { files, value } = event.target;
        console.log("key", this.props.index)
        this.setState({ value })
        if (files) {
            const reader = new FileReader();
            reader.onload = event => this.props.photoSelected(event.target.result, this.props.index);
            reader.readAsDataURL(files[0]);
        }
    }
    render() {
        const { classes } = this.props;


        return <Grid item xs={2}>
            <div className={classes.container} >
                <div className={classes.photoWrapper} style={{
                    backgroundImage: `url(${this.props.data})`
                }}>

                    <input id={"photo" + this.props.index}
                        type="file"
                        name="photo"
                        className={classes.hiddenInput}
                        value={this.state.value}
                        onChange={this.selectPhoto} />
                    <label htmlFor={"photo" + this.props.index}>
                        <Photo className={classes.icon} fontSize={"large"} />
                    </label>
                </div>
            </div>
        </Grid>
    }
}
const styles = theme => ({
    container: {
        width: "97%",
        paddingBottom: "100%",
        position: "relative",
        boxSizind: "border-box"

    },
    photoWrapper: {
        position: "absolute",
        top: 0, bottom: 0, left: 0, right: 0,
        backgroundColor: "white",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid #7f7f7f",
        marginBottom: 16,
        borderRadius: 8,
        '&:hover': {
            backgroundColor: "#7a7a7a",
            cursor: "pointer"
        },
        hover: {},
        backgroundSize: "contain"

    },
    hiddenInput: {
        display: 'none'
    },
    icon: {
        cursor: "pointer"
    }
})

export default withStyles(styles)(PhotoThumbnail);
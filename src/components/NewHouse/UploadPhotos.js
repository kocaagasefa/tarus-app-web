import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoThumbnail from './PhotoThumbnail';
import { Grid, Button } from '@material-ui/core';
import { addPhotos } from '../../store/actions';
class UploadPhotos extends Component {
    state = {
        photos: []
    }
    componentDidMount() {

    }
    photoSelected = (data) => {
        this.setState(prevState => {
            return {photos:[...prevState.photos, data],enabled:prevState.enabled+1}
        })
    }
    addPhotos = () => {
        console.log("will add")
        this.props.addPhotos(this.state.photos.filter(photo=>photo),this.props.houseId).then(this.props.onComplete)
    }
    photoDeleted = (index) => {
        this.setState(prevState=> {
            return {
                photos:prevState.photos.filter((photo,i) => index!==i)
            }
        })
    }
    render() {
        return (
            <Grid container>
                {
                    [...new Array(12)].map((_, key) => <PhotoThumbnail key={key} index={key} data={this.state.photos[key]} photoSelected={this.photoSelected} photoDeleted={this.photoDeleted} enabled={this.state.photos.length === key}/>)
                }
                <Button color="primary" variant="contained" onClick={this.addPhotos}>Add Photos</Button>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPhotos: (...args) => dispatch(addPhotos(...args))
    }
}

export default connect(null, mapDispatchToProps)(UploadPhotos);
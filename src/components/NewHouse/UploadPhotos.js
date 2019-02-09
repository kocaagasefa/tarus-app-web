import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoThumbnail from './PhotoThumbnail';
import { Grid, Button } from '@material-ui/core';
import { addPhotos } from '../../store/actions';
class UploadPhotos extends Component {
    state = {
        photos: [...new Array(12)]
    }
    componentDidMount() {

    }
    photoSelected = (data, index) => {
        console.log(index, data)
        this.setState(prevState => {
            return {
                photos: prevState.photos.map((photo, i) => {
                    if (i === index)
                        return data
                    return photo
                })
            }
        })
    }
    addPhotos = () => {
        console.log("will add")
        this.props.addPhotos(this.state.photos.filter(photo=>photo),this.props.houseId)
    }
    render() {
        alert(this.props.houseId)
        return (
            <Grid container>
                {
                    this.state.photos.map((data, key) => <PhotoThumbnail key={key} index={key} data={data} photoSelected={this.photoSelected} />)
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
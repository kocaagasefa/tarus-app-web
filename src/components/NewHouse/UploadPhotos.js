import React, { Component } from 'react';
import PhotoThumbnail from './PhotoThumbnail';
import { Grid } from '@material-ui/core';
class UploadPhotos extends Component {
    state = {
        photos: [...new Array(12)]
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
    render() {

        return (
            <Grid container>
                {
                    this.state.photos.map((data, key) => <PhotoThumbnail key={key} index={key} data={data} photoSelected={this.photoSelected} />)
                }
            </Grid>
        )
    }
}

export default UploadPhotos;
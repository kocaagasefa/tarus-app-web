import React from 'react';
import Photo from '@material-ui/icons/Photo'
import { withStyles} from '@material-ui/core';
const photoThumb = props => {
    const { classes } = props;
    return <div className={classes.container} > 
        <Photo fontSize={"large"} />
    </div>
}
const styles = theme => ({
    container:{
        width:150,
        height:150,
        backgroundColor:"white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"3px solid #7f7f7f",
        margin:16,
        borderRadius:8,
        '&:hover':{
            backgroundColor:"#7a7a7a",
            cursor:"pointer"
        },
        hover:{}
    }
})

export default withStyles(styles)(photoThumb);
import React from 'react';

import { InputBase, withStyles } from '@material-ui/core';


const customInput = props => {
    console.log("left icon", props.lefticon)
    return (
    <div className={props.classes.container} style={props.containerStyle}>
        {props.lefticon}
        <InputBase  
            className={[props.classes.input,props.lefticon&&props.classes.inputWithIcon]}
            style={props.style}/>
    </div>
);}

const style = theme => ({
    container:{
        border:"1px solid #9927B1",
        borderRadius:theme.spacing.unit,
        backgroundColor:"#452051",
        padding:theme.spacing.unit,
        display:"flex",
        alignItems:"center",
        margin :theme.spacing.unit
    },
    input:{
        color:"white",
        width:"100%",
        boxSizing:"border-box"
    },
    inputWithIcon:{
        paddingLeft:theme.spacing.unit,
        borderLeft:`1px solid white`,
        marginLeft:theme.spacing.unit
    }

})

export default withStyles(style)(customInput)
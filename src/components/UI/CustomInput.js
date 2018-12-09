import React from 'react';

import {InputBase, withStyles } from '@material-ui/core';


const customInput = props => {
    const {container, lefticon,classes,containerStyle, ...others} = props;
    return (
    <div className={classes.container} style={containerStyle}>
        {lefticon}
        <InputBase  
            {...others}
            className ={[props.classes.input,props.lefticon&&props.classes.inputWithIcon]}/>
    </div>
);}

const style = theme => ({
    container:{
        border:"1px solid #9927B1",
        borderRadius:theme.spacing.unit,
        backgroundColor:"rgba(255,255,255,.1)",
        padding:theme.spacing.unit,
        display:"flex",
        alignItems:"center",
        margin :theme.spacing.unit
    },
    input:{
        color:"white",
        width:"100%",
        boxSizing:"border-box",
        padding:"3px 0"
    },
    inputWithIcon:{
        paddingLeft:theme.spacing.unit,
        borderLeft:`1px solid #9927B1`,
        marginLeft:theme.spacing.unit
    }

});

export default withStyles(style)(customInput)
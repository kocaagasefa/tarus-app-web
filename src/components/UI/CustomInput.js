import React from 'react';

import { InputBase } from '@material-ui/core';


export default props => (
    <div style={{padding:4,...props.containerStyle}}>
        {props.lefticon}
        <InputBase  style={{borderLeft:props.lefticon?"1px solid black":"initial", color:"white",...props.style}}/>
    </div>
);

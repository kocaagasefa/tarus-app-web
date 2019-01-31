import React from 'react';
import { Button } from '@material-ui/core';

const houses = (props) => <div>

    Houses goes here
    <Button color="primary" variant="contained" onClick={() => props.history.push(props.match.path + "/new")}>Add New </Button>
</div>

export default houses;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../UI/CustomInput';
import Button from '../UI/CustomButton';
import { withStyles, Select,MenuItem } from '@material-ui/core';
import { addHouse } from '../../store/actions/house';
class NewHouse extends Component {

    addHouse = () => {
        const house = {
            title:"House Title",
            description:"house description",
            photos:[]
        }
        this.props.addHouse(house);
    }

    render(){
        const { classes} = this.props;
        return (<form className={classes.form}>  
            <Input placeholder="Title"/>
            <Input placeholder="Description"/>
            <Input className={classes.type}
                            name="type"
                            placeholder="type"
                            type="select"
                            value="shared"
                        >
                            {[{text:"Shared Room",value:"shared"},{text:"Private Room",value:"private"}].map(({ value, text }) => (
                                <MenuItem key={value} value={value}>{text}</MenuItem>
                            ))}
                        </Input>
            <Button onClick={this.addHouse} >Save </Button>
        </form>)
    }
}


const styles = theme => ({
    form:{
        backgroundColor:"blue",
        padding:10
    },
    type:{
        width:"100%"
    }
})
const mapDispatchToProps = dispatch => {
    return {
        addHouse: (house) => dispatch(addHouse(house))
    }
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(NewHouse));
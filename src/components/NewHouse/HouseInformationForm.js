import React, { Component} from 'react';
import EmailIcon from '@material-ui/icons/Email'
import { formDataUpdate } from '../../helpers/validate';
import Button from '../UI/CustomButton';
import Input from '../UI/CustomInput';
import { withStyles, MenuItem} from '@material-ui/core';

class HouseInformationForm extends Component {
    
    state={
        form: {
            title:{
                value:""
            },
            description:{
                value:""
            },
            type:{
                value:"shared"
            }
        }
    }
    addHouse = () => {
        const house = {
            title:this.state.form.title.value,
            description:this.state.form.description.value,
            type:this.state.form.type.value,
            confirmed:false
        }
        this.props.addHouse(house).then(res=>{
            if(res){
                console.log(res)
                this.props.onComplete(res.key);
            }
        });
    }
    handleChange = (event) => {
        const { name, value, checked } = event.target;
        this.setState(prevState => {
            return {
                form: formDataUpdate(prevState.form, checked || value, name)
            }
        })
    }
    render(){
        const { title,description,type } = this.state.form;
        const { classes} = this.props;
        return (<form className={classes.form}>  
            <Input
                lefticon={<EmailIcon style={{ color: "white" }} />}
                placeholder="Title"
                name="title"
                value={title.value}
                onChange={this.handleChange}
                invalid={!title.isValid && title.touched}
            />
            <Input 
                lefticon={<EmailIcon style={{ color: "white" }} />}
                placeholder="Description"
                name="description"
                value={description.value}
                onChange={this.handleChange}
                invalid={!description.isValid && description.touched}
                />
            <Input className={classes.type}
                lefticon={<EmailIcon style={{ color: "white" }} />}
                name="type"
                placeholder="type"
                type="select"
                value={type.value}
                onChange={this.handleChange}
                invalid={!type.isValid && type.touched}
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
        backgroundColor:"orange",
        padding:10,
        flexGrow:1,
        justifyContent:"space-between"
    },
    type:{
        width:"100%"
    }
});

export default withStyles(styles)(HouseInformationForm);
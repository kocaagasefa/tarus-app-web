import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles, Stepper, Step, StepLabel } from '@material-ui/core';

import { addHouse } from '../../store/actions/house';
import HouseInformationForm from './HouseInformationForm';
import UploadPhotos from './UploadPhotos';

class NewHouse extends Component {
    state={
        activeStep:0
    }

    nextStep = (key) => this.setState(prevState=>{return {activeStep:prevState.activeStep+1,key:key||prevState.key}})
    renderStep = () => {
        switch(this.state.activeStep){
            case 0:
            return <HouseInformationForm addHouse={this.props.addHouse} onComplete={this.nextStep}/>
            case 1:
            return <UploadPhotos houseId={this.state.key} onComplete = {this.nextStep}/>
            default:
            return <div>Submit Screen {this.state.key}</div>
        }
    }
    render(){
        const { activeStep } = this.state;
        console.log(this.props);
        return (
            <>
                <Stepper activeStep={activeStep}>
                    <Step completed ={activeStep > 0}>
                        <StepLabel>Enter House Data</StepLabel>
                    </Step>
                    <Step completed ={activeStep > 1}>
                        <StepLabel>Upload Photos</StepLabel>
                    </Step>
                    <Step completed ={activeStep > 2}>
                        <StepLabel>Preview and Confirm </StepLabel>
                    </Step>
                </Stepper>
                {this.renderStep()}
            </>
        )
    }
}

const styles = theme => ({

});
const mapDispatchToProps = dispatch => {
    return {
        addHouse: (house) => dispatch(addHouse(house))
    }
}


export default connect(null, mapDispatchToProps)(withStyles(styles,{withTheme:true})(NewHouse));
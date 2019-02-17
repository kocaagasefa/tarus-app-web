import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNamespaces} from 'react-i18next';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import { addHouse } from '../../store/actions/house';
import RoommateInformation from './RoommateInformation';
import UploadPhotos from './UploadPhotos';

class NewHRoommate extends Component {
    state = {
        activeStep: 0
    }

    nextStep = (key) => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1, 
            key
        }))
    }

    renderStep = () => {
        switch (this.state.activeStep) {
            case 0:
                return <RoommateInformation addHouse={this.props.addHouse} onComplete={this.nextStep} />
            case 1:
                return <UploadPhotos houseId={this.state.key} />
            default:
                return <div>Error</div>
        }
    }
    render() {
        const { activeStep } = this.state;
        const { t } = this.props;

        return (
            <>
                <Stepper activeStep={activeStep}>
                    <Step completed={activeStep > 0}>
                        <StepLabel>{t('roommate.stepRoommateData')}</StepLabel>
                    </Step>
                    <Step completed={activeStep > 1}>
                        <StepLabel>{t('general.uploadPhotos')}</StepLabel>
                    </Step>
                    <Step completed={activeStep > 2}>
                        <StepLabel>{t('roommate.stepConfirm')}</StepLabel>
                    </Step>
                </Stepper>
                {this.renderStep()}
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addHouse: (house) => dispatch(addHouse(house))
    }
}


export default connect(null, mapDispatchToProps)(withNamespaces("")(NewHRoommate));
import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import EmailIcon from '@material-ui/icons/Email'
import { formDataUpdate } from '../../helpers/validate';
import Button from '../UI/CustomButton';
import Input from '../UI/CustomInput';
import { withStyles } from '@material-ui/core';

class RoommateInformation extends Component {

    state = {
        form: {
            title: {
                value: ""
            },
            description: {
                value: ""
            }
        }
    }

    addRoommate = () => {
        const roommate = {
            title: this.state.form.title.value,
            description: this.state.form.description.value,
            confirmed: false
        }
        this.props.addRoommate(roommate).then(res => {
            if (res) {
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

    render() {
        const { title, description } = this.state.form;
        const { classes, t, nextStep, prevStep } = this.props;

        return (
            <form className={classes.form}>
                <Input
                    lefticon={
                        <EmailIcon style={{ color: "white" }} />}
                    placeholder={t('general.title')}
                    name="title"
                    value={title.value}
                    onChange={this.handleChange}
                    invalid={!title.isValid && title.touched}
                />
                <Input
                    lefticon={<EmailIcon style={{ color: "white" }} />}
                    placeholder={t('general.description')}
                    name="description"
                    value={description.value}
                    onChange={this.handleChange}
                    invalid={!description.isValid && description.touched}
                />
                <Button className={[classes.btn, classes.left].join(" ")}
                    onClick={() => prevStep()}>
                    {t('general.previous')}
                </Button>
                <Button className={[classes.btn, classes.right].join(" ")}
                    onClick={() => nextStep()}>
                    {t('general.next')}
                </Button>
            </form>
        )
    }
}


const styles = theme => ({
    form: {
        backgroundImage: 'linear-gradient(-180deg, rgba(49, 39, 201, 0.7), rgba(230, 69, 126, 0.7))',
        height: '100vh',
        justifyContent: 'center',
        textAlign: 'center',
        flex: 1
    },
    btn: {
        width: "10%",
        marginLeft: theme.spacing.unit,
        backgroundColor: 'rgba(230, 69, 126, 0.4)'
    },
    floatLeft: {
        float: "left"
    },
    floatRight: {
        float: "right"
    }
});

export default withStyles(styles)(withNamespaces("")(RoommateInformation));
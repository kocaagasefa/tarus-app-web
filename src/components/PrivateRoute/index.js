import React,{Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';

class PrivateRoute extends Component {

    render(){
        return this.props.user? 
        <Route {...this.props}/>
        :
        this.props.signInCheck?
        <CircularProgress /> 
        :
        <Redirect from={this.props.path} to="/" />
    }
}

const mapStateToProps = state => {
    return {
        user:state.auth.user,
        signInCheck:state.auth.signInCheck
    }
}
export default connect(mapStateToProps)(PrivateRoute);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from 'firebase';

class Profile extends Component {
    componentDidMount(){
        console.log("user profile",this.props.user);
    }
    render(){
        const {displayName,email,photoURL} = this.props.user;
        return (
            <>
                <div>{displayName}</div>
                <div>{email}</div>
                <img src={photoURL} alt="profile"/>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user:state.auth.user
    }
}
export default connect(mapStateToProps,null)(Profile);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Avatar } from '@material-ui/core';


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
                <Avatar style={{width:400,height:400}} src={photoURL} alt="profile"/>
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
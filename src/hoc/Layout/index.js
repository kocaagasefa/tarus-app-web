import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavBar  from '../../components/NavBar';

import {signInWithEmailAndPassword,signOut} from '../../store/actions';

import './style.css';

class Layout extends Component {
    state= {
        email:"",
        password:""
    }
    onInputChangeHandler = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        
        return (
            <>
                <NavBar 
                    user={this.props.user} 
                    inputChanged={this.onInputChangeHandler} 
                    signOut={this.props.signOut}
                    signIn = {()=>this.props.signInWithEmailAndPassword(this.state.email,this.state.password)}/>
                <main className=".Main">
                    {this.props.children}
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user:state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email,password) => dispatch(signInWithEmailAndPassword(email,password)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout);
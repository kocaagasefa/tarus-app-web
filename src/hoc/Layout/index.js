import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import SignInDialog from '../../containers/Auth/SignInDialog';

import { signInWithEmailAndPassword, signOut, facebookSignIn, googleSignIn } from '../../store/actions';

import './style.css';

class Layout extends Component {
    state = {
        email: "",
        password: "",
        openLoginDialog: false
    }
    onInputChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignInOpen = () => {
        this.setState({ openSignInDialog: true });
    }

    handleSignInClose = () => {
        this.setState({ openSignInDialog: false });
    }

    render() {
        return (
            <>
                <NavBar
                    onSignInOpen={this.handleSignInOpen}
                    user={this.props.user}
                    inputChanged={this.onInputChangeHandler}
                    signOut={this.props.signOut}
                    facebookSignIn={this.props.facebookSignIn}
                    googleSignIn={this.props.googleSignIn}
                    signIn={() => this.props.signInWithEmailAndPassword(this.state.email, this.state.password)} />
                <SignInDialog
                    open={this.state.openSignInDialog}
                    handleLoginOpen={this.handleLoginOpen}
                    onSignInClose={this.handleSignInClose}
                />
                <main className=".Main">
                    {this.props.children}
                </main>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInWithEmailAndPassword: (email, password) => dispatch(signInWithEmailAndPassword(email, password)),
        facebookSignIn: () => dispatch(facebookSignIn()),
        googleSignIn: () => dispatch(googleSignIn()),
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
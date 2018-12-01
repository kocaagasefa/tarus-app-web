import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import SignInDialog from '../../containers/Auth/SignInDialog';
import SignUpDialog from '../../containers/Auth/SignUpDialog';

import { signInWithEmailAndPassword, signOut, facebookSignIn, googleSignIn } from '../../store/actions';

import './style.css';

class Layout extends Component {
    state = {
        email: "",
        password: "",
        openSignInDialog: false,
        openSignUpDialog: false
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

    handleSignUpOpen = () => {
        this.setState({ openSignUpDialog: true });
    }

    handleSignUpClose = () => {
        this.setState({ openSignUpDialog: false });
    }

    render() {
        return (
            <>
                <NavBar
                    onSignInOpen={this.handleSignInOpen}
                    onSignUpOpen={this.handleSignUpOpen}
                    user={this.props.user}
                    inputChanged={this.onInputChangeHandler}
                    signOut={this.props.signOut}
                    facebookSignIn={this.props.facebookSignIn}
                    googleSignIn={this.props.googleSignIn}
                    signIn={() => this.props.signInWithEmailAndPassword(this.state.email, this.state.password)} />
                <SignInDialog
                    open={this.state.openSignInDialog}
                    onSignInClose={this.handleSignInClose}
                />
                <SignUpDialog
                    open={this.state.openSignUpDialog}
                    onSignUpClose={this.handleSignUpClose}
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
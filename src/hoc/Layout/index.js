import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import SignInDialog from '../../containers/Auth/SignInDialog';
import SignUpDialog from '../../containers/Auth/SignUpDialog';

import { signOut } from '../../store/actions';

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
                    signOut={this.props.signOut} />
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
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
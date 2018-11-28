import React, { Component } from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './hoc/Layout';
import Houses from './containers/Houses';
import Roommates from './containers/Roommates';
import Profile from './containers/Profile';
import PrivateRoute from './components/PrivateRoute';
import {authStateChangedListener} from './store/actions';

import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.authStateChangedListener();
  }
  componentWillUnmount(){

  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/houses" component={Houses} />
          <Route path="/roommates" component= {Roommates} />
          <PrivateRoute path="/profile" component= {Profile} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    authStateChangedListener: () => dispatch(authStateChangedListener())
  }
}

export default withRouter(connect(null,mapDispatchToProps)(App));

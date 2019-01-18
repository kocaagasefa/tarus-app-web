import React, { Component } from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Layout from './hoc/Layout';
import Houses from './containers/Houses';
import Roommates from './containers/Roommates';
import Profile from './containers/Profile/Profile';
import PrivateRoute from './components/PrivateRoute';
import {authStateChangedListener} from './store/actions';
import Landing from './containers/Landing';

import './App.css';
import NewHouse from './components/NewHouse/NewHouse';

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
          <PrivateRoute path="/houses/new" component={NewHouse} />
          <Route path="/houses" component={Houses} />
          <Route path="/roommates" component= {Roommates} />
          <PrivateRoute path="/profile" component= {Profile} />
          <Route path="/" component={Landing} />
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

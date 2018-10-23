import React, { Component } from 'react';
import {Switch,Route,withRouter,Redirect} from 'react-router-dom';
import Layout from './hoc/Layout';
import Houses from './containers/Houses';
import Roommates from './containers/Roommates';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/houses" component={Houses} />
          <Route path="/roommates" component= {Roommates} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);

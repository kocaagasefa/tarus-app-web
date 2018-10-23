import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MuiThemeProvider,CssBaseline,createMuiTheme} from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

import store from './store/configureStore';
import Landing from './containers/Landing/Landing';

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });
const app = (
    <BrowserRouter> 
        <Provider store={store()}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
            <Switch>
                <Route exact path="/" component={Landing} /> 
                <Route path="*" component={App} />
            </Switch>
                
            </MuiThemeProvider> 
        </Provider>       
    </BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

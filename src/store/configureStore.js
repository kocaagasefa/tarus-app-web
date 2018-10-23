import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    auth:authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>  createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
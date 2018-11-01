import {SHOW_ERROR,HIDE_ERROR} from '../actions/actionTypes';
const initialState= {
    message:null
}

const uiReducer= (state=initialState,action)=> {
    switch(action.type){
        case SHOW_ERROR:
        return {
            ...state,
            message:action.message
        }
        case HIDE_ERROR:
        return {
            ...state,
            message:null
        }
        default:
        return state;
    }
}

export default uiReducer;
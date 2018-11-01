import {FETCH_USER} from '../actions/actionTypes';
const initialState= {
    user:null
}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
    case FETCH_USER : 
    return {
        ...state,
        user:action.user
    }
        default:
        return state;
    }
}

export default authReducer;
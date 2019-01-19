import { FETCH_USER } from '../actions/actionTypes';

const initialState = {
    user: null,
    signInCheck: true
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.user,
                signInCheck: false
            }
        default:
            return state;
    }
}

export default authReducer;
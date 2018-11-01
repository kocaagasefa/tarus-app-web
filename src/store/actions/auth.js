import {SIGN_IN_REQUEST,SIGN_IN_SUCCESS,SIGN_IN_FAIL,FETCH_USER} from './actionTypes';
import {auth} from '../../config/firebase';

const signInRequest = () => {
    return {
        type:SIGN_IN_REQUEST
    }
}
const signInSuccess = () => {
    return {
        type:SIGN_IN_SUCCESS
    }
}
const signInFail = () => {
    return {
        type:SIGN_IN_FAIL
    }
}


export const signInWithEmailAndPassword = (email,password) => {
    return dispatch => {
        dispatch(signInRequest());
        return auth.signInWithEmailAndPassword(email,password)
            .then(res=>dispatch(signInSuccess))
            .catch(error=> {
                console.log("auth error", error);
                dispatch(signInFail());
            });
    }
}
export const signOut = () => {
    return dispatch => {
        return auth.signOut();
    }
}

export const authStateChangedListener = () => dispatch => {
    auth.onAuthStateChanged(user => {
        console.log("user",user)
        dispatch({
          type: FETCH_USER,
          user
        });
    });
  };
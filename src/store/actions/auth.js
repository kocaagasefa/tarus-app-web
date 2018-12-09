import {SIGN_IN_REQUEST,SIGN_IN_SUCCESS,SIGN_IN_FAIL,FETCH_USER} from './actionTypes';
import {auth,facebookProvider,googleProvider} from '../../config/firebase';

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
export const facebookSignIn = () => {
    return dispatch => {
        
        dispatch(signInRequest())
        auth.signInWithPopup(facebookProvider)
            .then(res=>{
                console.log(res);
                dispatch(signInSuccess)})
            .catch(error=>{
                console.log("auth error",error);
                dispatch(signInFail());
            });
    }
}

export const googleSignIn = () => {
    console.log("google sign in")
    return dispatch => {
        dispatch(signInRequest())
        auth.signInWithPopup(googleProvider)
            .then(res=>dispatch(signInSuccess))
            .catch(error=>{
                console.log("auth error",error);
                dispatch(signInFail());
            });
    }
}

export const authStateChangedListener = () => dispatch => {
    return auth.onAuthStateChanged(user => {
        console.log("user",user)
        dispatch({
          type: FETCH_USER,
          user
        });
        
    });
  };

  
  export const signUp = data => dispatch => {

      auth.createUserAndRetrieveDataWithEmailAndPassword(data)
        .then(res=>{

            return res;
        })
        .catch(error=>{
            console.log("sign up error",error);
        })
  }
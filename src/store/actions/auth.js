import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    FETCH_USER,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAIL
} from './actionTypes';
import { auth, facebookProvider, googleProvider, databaseRef } from '../../config/firebase';

const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}
const signInSuccess = () => {
    return {
        type: SIGN_IN_SUCCESS
    }
}
const signInFail = () => {
    return {
        type: SIGN_IN_FAIL
    }
}


export const signInWithEmailAndPassword = (email, password) => {
    return dispatch => {
        dispatch(signInRequest());
        return auth.signInWithEmailAndPassword(email, password)
            .then(res => dispatch(signInSuccess()))
            .catch(error => {
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
            .then(res => {
                dispatch(signInSuccess())
            })
            .catch(error => {
                console.log("auth error", error);
                dispatch(signInFail());
            });
    }
}

export const googleSignIn = () => {
    console.log("google sign in")
    return dispatch => {
        dispatch(signInRequest())
        auth.signInWithPopup(googleProvider)
            .then(res => dispatch(signInSuccess()))
            .catch(error => {
                console.log("auth error", error);
                dispatch(signInFail());
            });
    }
}

export const authStateChangedListener = () => dispatch => {
    return auth.onAuthStateChanged(user => {
        if (!user) {
            dispatch({
                type: FETCH_USER,
                user
            });
        }
        else {
            databaseRef.child('/users/' + user.uid).once('value')
                .then((snapshot) => {
                    if (snapshot.val()) {
                        user.phone = snapshot.val().phone ? snapshot.val().phone : null;
                        user.birthDate = snapshot.val().birthDate;
                        user.job = snapshot.val().job;
                    }

                    dispatch({
                        type: FETCH_USER,
                        user
                    });
                })
        }
    });

    // internete bağlı olunmadığı durumlar için
/*     return dispatch({
        type: FETCH_USER,
        user: {
            displayName: 'deneme',
            userName: 'deneme',
            email: 'deneme@deneme.com'
        }
    }) */
};


const signUpRequest = () => {
    return {
        type: SIGN_UP_REQUEST
    }
}

const signUpSuccess = () => {
    return {
        type: SIGN_UP_SUCCESS
    }
}
const signUpFail = () => {
    return {
        type: SIGN_UP_FAIL
    }
}
export const signUp = (user) => {
    return dispatch => {
        dispatch(signUpRequest())
        return auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(createdUser => {
                console.log("actions /auth / Sign Up ", createdUser);
                return auth.currentUser.updateProfile({
                    displayName: user.name + " " + user.surname
                })

            }).then(updatedUser => {
                console.log("updated", updatedUser);
                dispatch(signUpSuccess(updatedUser))
                return { success: true };
            })
            .catch(error => {
                console.log(error);
                dispatch(signUpFail());

            })
    }
}
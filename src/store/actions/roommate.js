import {
    ADD_ROOMMATE_REQUEST,
    ADD_ROOMMATE_SUCCESS,
    ADD_ROOMMATE_FAIL
} from "./actionTypes";
import { databaseRef, auth } from '../../config/firebase';

const addRoommateRequest = () => {
    return {
        type: ADD_ROOMMATE_REQUEST
    }
}

const addRoommateSuccess = () => {
    return {
        type: ADD_ROOMMATE_SUCCESS
    }
}

const addRoommateFail = () => {
    return {
        type: ADD_ROOMMATE_FAIL
    }
}

export const addRoommate = roommate => dispatch => {
    dispatch(addRoommateRequest());
    return databaseRef.child("roommates").push({
        ...roommate,
        owner: auth.currentUser.uid
    })
        .then(response => {
            dispatch(addRoommateSuccess());
            return { key: response.key, owner: auth.currentUser.uid };
        })
        .catch(error => {
            dispatch(addRoommateFail());
        })
}
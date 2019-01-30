import { ADD_HOUSE_REQUEST, ADD_HOUSE_SUCCESS, ADD_HOUSE_FAIL } from "./actionTypes";
import { databaseRef,auth } from '../../config/firebase';

const addHouseRequest = () => {
    return {
        type:ADD_HOUSE_REQUEST
    }
}

const addHouseSuccess = () => {
    return {
        type:ADD_HOUSE_SUCCESS
    }
}

const addHouseFail = () => {
    return {
        type: ADD_HOUSE_FAIL
    }
}

export const addHouse = house => dispatch => {
    dispatch(addHouseRequest());
    return databaseRef.child("houses").push({...house,owner:auth.currentUser.uid})
        .then(response=> {
            dispatch(addHouseSuccess());
            return {key:response.key,owner:auth.currentUser.uid};
        })
        .catch(error=>{
            dispatch(addHouseFail());
        })
}
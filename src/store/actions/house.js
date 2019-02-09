import { ADD_HOUSE_REQUEST, ADD_HOUSE_SUCCESS, ADD_HOUSE_FAIL, UPLOAD_PHOTOS_REQUEST, UPLOAD_PHOTOS_SUCCESS, UPLOAD_PHOTOS_FAIL } from "./actionTypes";
import { databaseRef,auth, storageRef } from '../../config/firebase';

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

export const addPhoto = (photo, houseId,fileName) => {
        //dispatch(updatePhotoReq())
        return storageRef.child("/houses/" + houseId  +"/"+fileName+".jpg")
            .putString(photo, "data_url")
            .then(snapshot => {
                snapshot.ref.getDownloadURL().then(function (url) {
                    return url;
                })
            })
            .catch(error => {
                console.log(error)
                return;
            })
    
}

const uploadPhotosRequest = () => {
    return {
        type:UPLOAD_PHOTOS_REQUEST
    }
}

const uploadPhotosSuccess = () => {
    return {
        type:UPLOAD_PHOTOS_SUCCESS
    }
}

const uploadPhotosFail = () => {
    return {
        type:UPLOAD_PHOTOS_FAIL
    }
}

export const addPhotos = (photos, houseId) => {
    return dispatch => {
        dispatch(uploadPhotosRequest())
       return Promise.all(photos.map((photo,index) => addPhoto(photo, houseId, index)))
       .then(photos => {
           console.log(photos);
           dispatch(uploadPhotosSuccess())
        })
    }
}
import {
    UPDATE_PROFILE_PHOTO_FAIL,
    UPDATE_PROFILE_PHOTO_REQ,
    UPDATE_PROFILE_PHOTO_SUCCESS
} from './actionTypes';
import { auth, storageRef } from '../../config/firebase';

const updatePhotoReq = () => {
    return {
        type: UPDATE_PROFILE_PHOTO_REQ
    }
}
const updatePhotoSuccess = () => {
    return {
        type: UPDATE_PROFILE_PHOTO_SUCCESS
    }
}
const updatePhotoFail = () => {
    return {
        type: UPDATE_PROFILE_PHOTO_FAIL
    }
}

export const updateProfilePhoto = (photo, uid) => {
    return dispatch => {
        dispatch(updatePhotoReq())
        return storageRef.child("/profile_photos/" + uid + "/profilePhoto.jpg")
            .putString(photo.data, "data_url")
            .then(snapshot => {
                snapshot.ref.getDownloadURL().then(function (url) {
                    return auth.currentUser.updateProfile({
                        photoURL: url
                    })
                })
            })
            .then(updatedUser => {
                dispatch(updatePhotoSuccess(updatedUser))
                return { success: true };
            })
            .catch(error => {
                dispatch(updatePhotoFail());
            })
    }
}
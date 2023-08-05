import {Dispatch} from "react";
import {PhotosAction, PhotosActionTypes} from "../../types/photos";
import axios from "axios";


export const fetchPhotos = (limit: number) => {
    return async (dispatch: Dispatch<PhotosAction>) => {
        try {
            dispatch({type: PhotosActionTypes.FETCH_PHOTOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/photos',
                {
                    params: {
                        _limit: limit
                    }
                });
            const photos = response.data;
            return dispatch({type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS, payload: photos})
        } catch (e) {
            dispatch({
                type: PhotosActionTypes.FETCH_PHOTOS_ERROR,
                payload: "Error occurred"
            })
        }
    }
}

export const setPhotosLimit = (limit: number): PhotosAction => {
    return {type: PhotosActionTypes.SET_PHOTOS_LIMIT, payload: limit}
}
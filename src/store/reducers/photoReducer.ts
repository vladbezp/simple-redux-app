import {PhotosActionTypes, PhotosState} from "../../types/photos";


const initialState: PhotosState = {
    photos: [],
    loading: false,
    error: null,
    limit: 0
}

export const photosReducer = (state = initialState, action: any): PhotosState => {
    switch (action.type) {
        case PhotosActionTypes.FETCH_PHOTOS:
            return {...state, loading: true}
        case PhotosActionTypes.FETCH_PHOTOS_SUCCESS:
            return {...state, loading: false, photos: action.payload}
        case PhotosActionTypes.FETCH_PHOTOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PhotosActionTypes.SET_PHOTOS_LIMIT:
            return {...state, limit: action.payload}
        default:
            return state
    }
}

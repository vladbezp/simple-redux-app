import {Photos} from "../models/photos";

export interface PhotosState {
    photos: Photos[];
    loading: boolean;
    error: null | string;
    limit: number;
}

export enum PhotosActionTypes {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',
    SET_PHOTOS_LIMIT = 'SET_PHOTOS_LIMIT'
}

interface FetchPhotosAction {
    type: PhotosActionTypes.FETCH_PHOTOS;
}

interface FetchPhotosSuccessAction {
    type: PhotosActionTypes.FETCH_PHOTOS_SUCCESS;
    payload: Photos[];
}

interface FetchPhotosErrorAction {
    type: PhotosActionTypes.FETCH_PHOTOS_ERROR;
    payload: string;
}

interface SetLimitAction {
    type: PhotosActionTypes.SET_PHOTOS_LIMIT;
    payload: number;
}

export type PhotosAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction | SetLimitAction;

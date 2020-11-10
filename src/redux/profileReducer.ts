import {ActionsTypes, AddPostActionType, ProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}

const initialState = {
	// inputValue: 'It-Inkubator',
	postData: [
		{id: 1, name: 'Denis', text: 'Hi everyone! Today I\'ve had a good day!!!', time: '1 minute ago'},
	],
	profile: null,
	status: ''

};

export const profileReducer = (state: any = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_POST: {
			let stateCopy = {...state}
			if (action.inputValue) {
				stateCopy.postData = [...state.postData, {id: 2, name: 'Denis', text: action.inputValue, time: '2 minutes ago'}]
				// stateCopy.inputValue = '';
			}
			return stateCopy;
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		case SAVE_PHOTO_SUCCESS:{
			return { ...state, profile: {...state.profile, photos: action.photos}}
		}
		default:
			return state
	}
}

//actions

export const addPostActionCreator = (inputValue: string): AddPostActionType => {
	return {
		type: ADD_POST,
		inputValue: inputValue
	}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}
export const savePhotoSuccess = (photos: any): any => {
	return {
		type: SAVE_PHOTO_SUCCESS,
		photos
	}
}

//thunks

export const getUserProfile = (userId: number) => async (dispatch: Function) => {
	let response = await usersAPI.getProfile(userId)
		dispatch(setUserProfile(response.data))
}

export const getStatus = (userId: number) => async (dispatch: Function) => {
	let response = await profileAPI.getStatus(userId)
		dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Function) => {
	let response = await profileAPI.updateStatus(status)
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
}
export const savePhoto = (file: any) => async (dispatch: Function) => {
	let response = await profileAPI.savePhoto(file)
	if (response.data.resultCode === 0) {
		dispatch(savePhotoSuccess(response.data.data.photos))
	}
}

export const setStatus = (status: string) => {
	return {type: SET_STATUS, status}
}
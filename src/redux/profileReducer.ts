import {ActionsTypes, AddPostActionType, ProfileType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

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

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes) => {
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
		default:
			return state
	}
}

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
export const getUserProfile = (userId: number) => (dispatch: Function) => {
	usersAPI.getProfile(userId).then(response => {
		dispatch(setUserProfile(response.data))
	})
}

export const getStatus = (userId: number) => (dispatch: Function) => {
	profileAPI.getStatus(userId).then(response => {
		dispatch(setStatus(response.data))
	})
}

export const updateStatus = (status: string) => (dispatch: Function) => {
	profileAPI.updateStatus(status)
		.then(response => {
			if (response.data.resultCode === 0) {
				dispatch(setStatus(status))
			}
		})
}

export const setStatus = (status: string) => {
	return {type: SET_STATUS, status}
}
import {ActionsTypes, AddPostActionType, OnChangeInputActionType, ProfileType} from "./store";

const ADD_POST = 'ADD-POST';
const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export type SetUserProfileType = {
	type: typeof SET_USER_PROFILE
	profile: ProfileType
}

const initialState = {
	inputValue: 'It-Inkubator',
	postData: [
		{id: 1, name: 'Denis', text: 'Hi everyone! Today I\'ve had a good day!!!', time: '1 minute ago'},
	],
	profile: null
};

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_POST: {
			let stateCopy = {...state}
			if (action.inputValue) {
				stateCopy.postData = [...state.postData, {id: 2, name: 'Denis', text: action.inputValue, time: '2 minutes ago'}]
				stateCopy.inputValue = '';
			}
			return stateCopy;
		}
		case ON_CHANGE_INPUT: {
			return {
				...state,
				inputValue: action.inputValue
			}
		}
		case SET_USER_PROFILE: {
			return {
				...state,
				profile: action.profile
			}
		}
		default:
			return state
	}
}

export const addPostActionCreator = (inputValue: string | undefined): AddPostActionType => {
	return {
		type: ADD_POST,
		inputValue: inputValue
	}
}

export const onChangeInputActionCreator = (inputValue: string): OnChangeInputActionType => {
	return {
		type: ON_CHANGE_INPUT,
		inputValue: inputValue
	}
}
export const setUserProfile = (profile: ProfileType): SetUserProfileType => {
	return {
		type: SET_USER_PROFILE,
		profile
	}
}
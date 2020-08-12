import {ActionsTypes, AddPostActionType, OnChangeInputActionType, ProfileType} from "./store";

const ADD_POST = 'ADD-POST';
const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';

const initialState = {
	inputValue: 'It-Inkubator',
	postData: [
		{id: 1, name: 'Denis', text: 'Hi everyone! Today I\'ve had a good day!!!', time: '1 minute ago'},
	]
};

export const profileReducer = (state: ProfileType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_POST: {
			let stateCopy = {...state}
			if (action.inputValue) {
				let newPost = {id: 2, name: 'Denis', text: action.inputValue, time: '2 minutes ago'}
				stateCopy.postData = [...state.postData]
				stateCopy.postData.push(newPost)
				stateCopy.inputValue = ''
			}
			return stateCopy;
		}
		case ON_CHANGE_INPUT: {
			return {
				...state,
				inputValue: state.inputValue = action.inputValue
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
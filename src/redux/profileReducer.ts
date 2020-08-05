import {ActionsTypes, AddPostActionType, OnChangeInputActionType, ProfileType} from "./store";

const ADD_POST = 'ADD-POST';
const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT';

export const profileReducer = (state:ProfileType, action:ActionsTypes) => {

	switch (action.type) {
		case ADD_POST:
			if (action.inputValue) {
				let newPost = {id: 2, name: 'Denis', text: action.inputValue, time: '2 minutes ago'}
				state.postData.push(newPost)
				state.inputValue = '';
			}
			return state;
		case ON_CHANGE_INPUT:
			state.inputValue = action.inputValue
			return state;
		default:
			return state;
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
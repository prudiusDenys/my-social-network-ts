import {ActionsTypes, AddMessageActionType, DialogsType, OnChangeTextareaActionType} from "./store";

const ADD_MESSAGE = 'ADD_MESSAGE';
const ON_CHANGE_TEXTAREA = 'ON_CHANGE_TEXTAREA';

export const dialogsReducer = (state:DialogsType, action:ActionsTypes) => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (action.textAreaValue) {
				let newMessage = {id: 4, text: action.textAreaValue}
				state.sentMessages.push(newMessage)
				state.newMessageText = '';
			}
			return state;
		case ON_CHANGE_TEXTAREA:
			state.newMessageText = action.textAreaValue
			return state;
		default:
			return state
	}
}


export const addMessageActionCreator = (textAreaValue: string | undefined): AddMessageActionType => {
	return {
		type: ADD_MESSAGE,
		textAreaValue: textAreaValue
	}
}

export const onChangeTextareaActionCreator = (textAreaValue: string): OnChangeTextareaActionType => {
	return {
		type: ON_CHANGE_TEXTAREA,
		textAreaValue: textAreaValue
	}
}
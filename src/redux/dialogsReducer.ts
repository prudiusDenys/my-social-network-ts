import {ActionsTypes, AddMessageActionType, DialogsType, OnChangeTextareaActionType} from "./store";

const ADD_MESSAGE = 'ADD_MESSAGE';
const ON_CHANGE_TEXTAREA = 'ON_CHANGE_TEXTAREA';

const initialState = {
		newMessageText: '',
		contactsData: [
			{
				id: 1,
				name: 'Mark Gruk',
				avatarUrl: 'https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/16:9/w_1920,c_limit/Avatar.jpg'
			},
			{
				id: 2,
				name: 'Alina Morgunova',
				avatarUrl: 'https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/16:9/w_1920,c_limit/Avatar.jpg'
			},
			{
				id: 3,
				name: 'Rustam Gasanov',
				avatarUrl: 'https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/16:9/w_1920,c_limit/Avatar.jpg'
			},
		],
		sentMessages: [
			{id: 1, text: 'Hello. My name is Denis'},
			{id: 2, text: 'What come over you ?'},
			{id: 3, text: 'Nice nice nice'}
		],
		gotMessages: [
			{id: 1, fullName: 'Mark', text: 'Hello. My name is Mark'},
			{id: 2, fullName: 'Mark', text: 'I live in Kiev'},
		],
	};

export const dialogsReducer = (state:DialogsType = initialState, action:ActionsTypes) => {
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
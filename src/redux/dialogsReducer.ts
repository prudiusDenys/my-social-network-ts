import {ActionsTypes, AddMessageActionType, DialogsType} from "./store";

const ADD_MESSAGE = 'ADD_MESSAGE';


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

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsTypes) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let stateCopy = {...state}
			if (action.textAreaValue) {
				stateCopy.sentMessages = [...state.sentMessages, {id: 4, text: action.textAreaValue}]
				stateCopy.newMessageText = '';
			}
			return stateCopy;
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
import {savePhotoSuccess, SetUserProfileType} from "./profileReducer";


export type StoreType = {
	_state: StateType
	_callSubscriber: () => void
	getState: () => StateType
	subscribe: (observer: () => void) => void
	dispatch: (action: ActionsTypes) => void
}
export type StateType = {
	dialogs: DialogsType
	profile: ProfileType
}
export type ActionsTypes =
	AddPostActionType
	| OnChangeInputActionType
	| AddMessageActionType
	| OnChangeTextareaActionType
	| SetUserProfileType
	| setStatusType
| ReturnType<typeof  savePhotoSuccess>
export type DialogsType = {
	newMessageText: string
	contactsData: Array<UserDataType>
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
}
export type UserDataType = {
	id: number
	name: string
	avatarUrl: string
}
export type SentMessagesType = {
	id: number
	text: string
}
export type GotMessagesType = {
	id: number
	fullName: string,
	text: string
}
export type ProfileType = {
	// inputValue: string
	postData: Array<PostDataType>
}
export type PostDataType = {
	id: number,
	name: string,
	text: string,
	time: string
}
export type AddPostActionType = {
	type: 'ADD-POST'
	inputValue: string | undefined
}
export type OnChangeInputActionType = {
	type: 'ON_CHANGE_INPUT'
	inputValue: string
}
export type AddMessageActionType = {
	type: 'ADD_MESSAGE'
	textAreaValue: string | undefined
}
export type OnChangeTextareaActionType = {
	type: 'ON_CHANGE_TEXTAREA'
	textAreaValue: string
}
export type setStatusType = {
	type : 'SET_STATUS'
	status: string
}

// const store: StoreType = {
// 	_state: {
// 		profile: {
// 			inputValue: 'It-Inkubator',
// 			postData: [
// 				{id: 1, name: 'Denis', text: 'Hi everyone! Today I\'ve had a good day!!!', time: '1 minute ago'},
// 			],
// 		},
// 		dialogs: {
// 			newMessageText: '',
// 			contactsData: [
// 				{
// 					id: 1,
// 					name: 'Mark Gruk',
// 					avatarUrl: 'https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/16:9/w_1920,c_limit/Avatar.jpg'
// 				},
// 				{
// 					id: 2,
// 					name: 'Alina Morgunova',
// 					avatarUrl: 'https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/16:9/w_1920,c_limit/Avatar.jpg'
// 				},
// 				{
// 					id: 3,
// 					name: 'Rustam Gasanov',
// 					avatarUrl: 'https://media.gqitalia.it/photos/5ec3ca47a63ee8cb452d9ce4/16:9/w_1920,c_limit/Avatar.jpg'
// 				},
// 			],
// 			sentMessages: [
// 				{id: 1, text: 'Hello. My name is Denis'},
// 				{id: 2, text: 'What come over you ?'},
// 				{id: 3, text: 'Nice nice nice'}
// 			],
// 			gotMessages: [
// 				{id: 1, fullName: 'Mark', text: 'Hello. My name is Mark'},
// 				{id: 2, fullName: 'Mark', text: 'I live in Kiev'},
// 			],
// 		}
// 	},
// 	_callSubscriber() {
// 		console.log('state changed')
// 	},
// 	getState() {
// 		return this._state
// 	},
// 	subscribe(observer) {
// 		this._callSubscriber = observer
// 	},
// 	dispatch(action) {
// 		this._state.profile = profileReducer(this._state.profile, action);
// 		this._state.dialogs = dialogsReducer(this._state.dialogs, action);
// 		this._callSubscriber();
// 	}
// }

// export default store;
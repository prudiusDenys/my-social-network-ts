export type StateType = {
	Dialogs: DialogsType
	Profile: ProfileType
}
export type DialogsType = {
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
	postData: Array<PostDataType>
}
export type PostDataType = {
	id: number,
	name: string,
	text: string,
	time: string
}

const State: StateType = {
	Dialogs: {
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
	},
	Profile: {
		postData: [
			{id: 1, name: 'Denis', text: 'Hi everyone! Today I\'ve had a good day!!!', time: '1 minute ago'}
		]
	}
}

export default State;
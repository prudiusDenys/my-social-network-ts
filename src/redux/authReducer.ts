export type ActionsType = SetUserDataType;


export type InitialStateType = {
	userId: null | number
	email: null | string
	login: null | string
	isAuth: boolean

}

export type SetUserDataType = {
	type: typeof SET_USER_DATA
	data: DataType
}
type DataType = {
	userId: number
	email: string
	login: string
}

const SET_USER_DATA = 'SET_USER_DATA';

const initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {
				...state,
				...action.data,
				isAuth: true
			}
		}
		default:
			return state
	}
}

export const setUserData = (userId: number, email: string, login: string): SetUserDataType => {
	return {type: SET_USER_DATA, data: {userId, email, login}}
}
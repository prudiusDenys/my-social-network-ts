import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
	userId: null | number
	email: null | string
	login: null | string
	isAuth: boolean
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
				...action.data
			}
		}
		default:
			return state
	}
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => {
	return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
}

export const getAuthUserData = () => (dispatch: Function) => {
	authAPI.me().then(response => {
		if (response.data.resultCode === 0) {
			let {id, email, login} = response.data.data
			dispatch(setUserData(id, email, login, true))
		}
	})
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Function) => {
	authAPI.login(email, password, rememberMe).then(response => {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData())
		} else {
			let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', {_error: message}))
		}
	})
}

export const logout = () => (dispatch: Function) => {
	authAPI.logout().then(response => {
		if (response.data.resultCode === 0) {
			dispatch(setUserData(null, null, null, false))
		}
	})
}
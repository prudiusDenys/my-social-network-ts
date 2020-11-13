import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "redux";

export type ActionsType = SetUserDataType | ReturnType<typeof getCaptchaUrlSuccess>;
export type InitialStateType = {
	userId: null | number
	email: null | string
	login: null | string
	isAuth: boolean,
	captchaUrl: null | string

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

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

const initialState: InitialStateType = {
	userId: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
};

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
	switch (action.type) {
		case SET_USER_DATA: {
			return {...state, ...action.data}
		}
		case "auth/GET_CAPTCHA_URL_SUCCESS": {
			return {...state, captchaUrl: action.captchaUrl}
		}
		default:
			return state
	}
}

export const setUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataType => {
	return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
}

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
	return {type: GET_CAPTCHA_URL_SUCCESS, captchaUrl} as const
}

export const getAuthUserData = () => async (dispatch: Function) => {
	let response = await authAPI.me()
	if (response.data.resultCode === 0) {
		let {id, email, login} = response.data.data
		dispatch(setUserData(id, email, login, true))
	}
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: Function) => {
	let response = await authAPI.login(email, password, rememberMe, captcha)
	if (response.data.resultCode === 0) {
		dispatch(getAuthUserData())
	} else {
		if (response.data.resultCode === 10) {
			debugger
			dispatch(getCaptchaUrl())
		}
		let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
		dispatch(stopSubmit('login', {_error: message}))
	}
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
	let response = await securityAPI.getCaptchaUrl();
	const captchaUrl = response.data.url
	dispatch(getCaptchaUrlSuccess(captchaUrl))
	// let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
	// dispatch(stopSubmit('login', {_error: message}))
}

export const logout = () => async (dispatch: Dispatch) => {
	let response = await authAPI.logout()
	if (response.data.resultCode === 0) {
		debugger
		dispatch(setUserData(null, null, null, false))
	}
}
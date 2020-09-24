import {getAuthUserData} from "./authReducer";


export type InitialStateType = {
	initialized: false,

}

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState: InitialStateType = {
	initialized: false,
};

export const appReducer = (state: InitialStateType = initialState, action:any) => {
	switch (action.type) {
		case INITIALIZED_SUCCESS: {
			return {
				...state,
				initialized: true
			}
		}
		default:
			return state
	}
}

export const initializedSuccess = () => {
	return {type: INITIALIZED_SUCCESS}
}

export const initializeApp = () => (dispatch: Function) => {
	let promise = dispatch(getAuthUserData())
	promise.all([promise])
		.then(()=>{
			dispatch(initializedSuccess());
		})
}
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer,
		usersPage: userReducer,
		auth: authReducer
	}
)

export type rootReducers = ReturnType< typeof reducers>

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

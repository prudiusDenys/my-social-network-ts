import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from "./app-Reducer";

const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer,
		usersPage: userReducer,
		auth: authReducer,
		form: formReducer,
	app: appReducer
	}
)

	// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type rootReducers = ReturnType<typeof reducers>


// @ts-ignore
window.store = store
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import {authReducer} from "./authReducer";


const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer,
		usersPage: userReducer,
		auth: authReducer
	}
)

export type rootReducers = ReturnType< typeof reducers>

export const store = createStore(reducers)

import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";


const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer,
		usersPage: userReducer
	}
)

export const store = createStore(reducers)
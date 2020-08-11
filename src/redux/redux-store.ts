import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer
	}
)

export const store = createStore(reducers)
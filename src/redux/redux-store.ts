import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";


const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer
	}
)

export const store = createStore(reducers)
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {StoreType} from "./store";
import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
		dialogs: dialogsReducer,
		profile: profileReducer
	}
)

export const store : StoreType = createStore(reducers)
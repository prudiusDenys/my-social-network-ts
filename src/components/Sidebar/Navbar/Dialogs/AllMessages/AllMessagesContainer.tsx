import React from "react";
import {addMessageActionCreator} from "../../../../../redux/dialogsReducer";
import AllMessages from "./AllMessages";
import {connect} from "react-redux";
import {rootReducers} from "../../../../../redux/redux-store";


let mapStateToProps = (state:rootReducers) => {
	return {
		gotMessages: state.dialogs.gotMessages,
		newMessageText: state.dialogs.newMessageText,
		sentMessages: state.dialogs.sentMessages,
	}
}

let mapDispatchToProps = (dispatch:any) => {
	return {
		addMessage: (messageValue: string | undefined) => {
			dispatch(addMessageActionCreator(messageValue))
		}
	}
}

const AllMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AllMessages);

export default AllMessagesContainer;
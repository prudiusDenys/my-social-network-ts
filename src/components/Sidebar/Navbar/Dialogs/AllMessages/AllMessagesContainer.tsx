import React from "react";
import {addMessageActionCreator, onChangeTextareaActionCreator} from "../../../../../redux/dialogsReducer";
import AllMessages from "./AllMessages";
import {connect} from "react-redux";
import {StateType} from "../../../../../redux/store";


// const AllMessagesContainer = () => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				let state = store.getState();
// 				let addMessage = (messageValue: string | undefined) => {
// 					store.dispatch(addMessageActionCreator(messageValue))
// 				}
//
// 				let onChangeTextarea = (textareaValue: string) => {
// 					store.dispatch(onChangeTextareaActionCreator(textareaValue))
// 				}
// 				return <AllMessages addMessage={addMessage}
// 														onChangeTextarea={onChangeTextarea}
// 														gotMessages={state.dialogs.gotMessages}
// 														newMessageText={state.dialogs.newMessageText}
// 														sentMessages={state.dialogs.sentMessages}/>
// 			}
// 			}
// 		</StoreContext.Consumer>
// 	)
// }

let mapStateToProps = (state:StateType) => {
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
		},
		onChangeTextarea: (textareaValue: string) => {
			dispatch(onChangeTextareaActionCreator(textareaValue))
		},
	}
}

const AllMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(AllMessages);

export default AllMessagesContainer;
import React from "react";
import {addMessageActionCreator, onChangeTextareaActionCreator} from "../../../../../redux/dialogsReducer";
import AllMessages from "./AllMessages";
import StoreContext from "../../../../../StoreContext";


const AllMessagesContainer = () => {
	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();
				let addMessage = (messageValue: string | undefined) => {
					store.dispatch(addMessageActionCreator(messageValue))
				}

				let onChangeTextarea = (textareaValue: string) => {
					store.dispatch(onChangeTextareaActionCreator(textareaValue))
				}
				return <AllMessages addMessage={addMessage}
														onChangeTextarea={onChangeTextarea}
														gotMessages={state.dialogs.gotMessages}
														newMessageText={state.dialogs.newMessageText}
														sentMessages={state.dialogs.sentMessages}/>
			}
			}
		</StoreContext.Consumer>
	)
}

export default AllMessagesContainer;
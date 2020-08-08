import React from "react";
import {
	ActionsTypes,
	GotMessagesType,
	SentMessagesType
} from "../../../../../redux/store";
import {addMessageActionCreator, onChangeTextareaActionCreator} from "../../../../../redux/dialogsReducer";
import AllMessages from "./AllMessages";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
	newMessageText: string
	dispatch: (action: ActionsTypes) => void
}

const AllMessagesContainer = (props: PropsType) => {

	let addMessage = (messageValue: string | undefined) => {
		props.dispatch(addMessageActionCreator(messageValue))
	}

	let onChangeTextarea = (textareaValue: string) => {
		props.dispatch(onChangeTextareaActionCreator(textareaValue))
	}

	return <AllMessages addMessage={addMessage}
											onChangeTextarea={onChangeTextarea}
											gotMessages={props.gotMessages}
											newMessageText={props.newMessageText}
											sentMessages={props.sentMessages}/>
}

export default AllMessagesContainer;
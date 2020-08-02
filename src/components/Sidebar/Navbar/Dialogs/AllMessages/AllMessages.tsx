import React, {ChangeEvent} from "react";
import classes from "./AllMessages.module.css";
import ListMessages from "./ListMessages/ListMessages";
import {
	ActionsTypes,
	AddMessageActionType,
	AddPostActionType,
	GotMessagesType,
	OnChangeInputActionType, OnChangeTextareaActionType,
	SentMessagesType
} from "../../../../../redux/State";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
	newMessageText: string
	dispatch: (action: ActionsTypes) => void
}

const AllMessages = (props: PropsType) => {

	let onChange = React.createRef<HTMLTextAreaElement>()

	let onClickHandler = () => {
		props.dispatch({type: 'ADD_MESSAGE', textAreaValue: onChange.current?.value})
	}

	let onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
		props.dispatch({type: 'ON_CHANGE_TEXTAREA', textAreaValue:e.currentTarget.value})
	}

	return (
		<div className={classes.allMessages}>
			<div className={classes.title}>
				Write your message
			</div>
			<div className={classes.message}>
				<textarea ref={onChange} onChange={onChangeHandler}  placeholder={'Your message...'} value={props.newMessageText}> </textarea>
				<button onClick={onClickHandler}>Send message</button>
			</div>
				<ListMessages sentMessages={props.sentMessages}
											gotMessages={props.gotMessages}/>
		</div>
	)
}

export default AllMessages;
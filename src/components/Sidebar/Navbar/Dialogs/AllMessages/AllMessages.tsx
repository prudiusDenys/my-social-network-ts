import React, {ChangeEvent} from "react";
import classes from "./AllMessages.module.css";
import ListMessages from "./ListMessages/ListMessages";
import {
	ActionsTypes,
	GotMessagesType,
	SentMessagesType
} from "../../../../../redux/store";
import {addMessageActionCreator, onChangeTextareaActionCreator} from "../../../../../redux/dialogsReducer";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
	newMessageText: string
	dispatch: (action: ActionsTypes) => void
}

const AllMessages = (props: PropsType) => {

	let onChange = React.createRef<HTMLTextAreaElement>()

	let onClickHandler = () => {
		props.dispatch(addMessageActionCreator(onChange.current?.value))
	}

	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		let textareaValue = e.currentTarget.value;
		props.dispatch(onChangeTextareaActionCreator(textareaValue))
	}

	return (
		<div className={classes.allMessages}>
			<div className={classes.title}>
				Write your message
			</div>
			<div className={classes.message}>
				<textarea ref={onChange} onChange={onChangeHandler} placeholder={'Your message...'}
									value={props.newMessageText}> </textarea>
				<button onClick={onClickHandler}>Send message</button>
			</div>
			<ListMessages sentMessages={props.sentMessages}
										gotMessages={props.gotMessages}/>
		</div>
	)
}

export default AllMessages;
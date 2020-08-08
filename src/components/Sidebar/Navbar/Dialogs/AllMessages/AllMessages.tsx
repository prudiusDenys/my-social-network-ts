import React, {ChangeEvent} from "react";
import classes from "./AllMessages.module.css";
import ListMessages from "./ListMessages/ListMessages";
import {
	GotMessagesType,
	SentMessagesType
} from "../../../../../redux/store";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
	newMessageText: string
	addMessage: (messageValue: string | undefined) => void
	onChangeTextarea: (textareaValue: string) => void
}

const AllMessages = (props: PropsType) => {

	let onChange = React.createRef<HTMLTextAreaElement>()

	let onClickHandler = () => {
		props.addMessage(onChange.current?.value)
	}
	let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		props.onChangeTextarea(e.currentTarget.value)
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
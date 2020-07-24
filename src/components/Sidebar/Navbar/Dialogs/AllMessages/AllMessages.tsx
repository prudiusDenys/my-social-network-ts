import React from "react";
import classes from "./AllMessages.module.css";
import ListMessages from "./ListMessages/ListMessages";
import {GotMessagesType, SentMessagesType} from "../../../../../redux/State";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
}

const AllMessages = (props: PropsType) => {
	return (
		<div className={classes.allMessages}>
			<div className={classes.title}>
				Write your message
			</div>
			<div className={classes.message}>
				<textarea  placeholder={'Your message...'}>Hello</textarea>
				<button>Send message</button>
			</div>
				<ListMessages sentMessages={props.sentMessages}
											gotMessages={props.gotMessages}/>
		</div>
	)
}

export default AllMessages;
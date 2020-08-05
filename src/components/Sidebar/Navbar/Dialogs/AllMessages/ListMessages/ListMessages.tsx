import React from "react";
import classes from "./ListMessages.module.css";
import {GotMessagesType, SentMessagesType} from "../../../../../../redux/store";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
}

const ListMessages = (props: PropsType) => {

	let sentMessageElement = props.sentMessages.map(t => {
		return (
			<div key={t.id} className={classes.sentMessage}>
				<p className={classes.sender}>
					You:<br/>
					{t.text}
				</p>
			</div>
		)
	})
	let gotMessageElement = props.gotMessages.map(t => {
		return (
			<div key={t.id} className={classes.gotMessage}>
				<p className={classes.guess}>
					{t.fullName}:<br/>
					{t.text}
				</p>
			</div>
		)
	})

	return (
		<div className={classes.listMessages}>
			{sentMessageElement}
			{gotMessageElement}
		</div>
	)
}

export default ListMessages;
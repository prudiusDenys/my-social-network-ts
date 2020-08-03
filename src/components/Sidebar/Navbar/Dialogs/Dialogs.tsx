import React from "react";
import classes from "./Dialogs.module.css";
import {
	ActionsTypes,
	GotMessagesType,
	SentMessagesType,
	UserDataType
} from "../../../../redux/State";
import Contacts from "./Contacts/Contacts";
import AllMessages from "./AllMessages/AllMessages";

type PropsType = {
	userData: Array<UserDataType>
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
	newMessageText: string
	dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: PropsType) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.title}>
				Your Massages
			</div>
			<div className={classes.dialogsBox}>
				<Contacts userData={props.userData}/>
				<AllMessages sentMessages={props.sentMessages}
										 gotMessages={props.gotMessages}
										 newMessageText={props.newMessageText}
										 dispatch={props.dispatch}/>
			</div>
		</div>
	)
}

export default Dialogs;
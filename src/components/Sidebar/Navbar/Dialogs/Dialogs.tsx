import React from "react";
import classes from "./Dialogs.module.css";
import {GotMessagesType, SentMessagesType, UserDataType} from "../../../../redux/State";
import Contacts from "./Contacts/Contacts";
import AllMessages from "./AllMessages/AllMessages";

type PropsType = {
	userData: Array<UserDataType>
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
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
										 gotMessages={props.gotMessages}/>
			</div>
		</div>
	)
}

export default Dialogs;
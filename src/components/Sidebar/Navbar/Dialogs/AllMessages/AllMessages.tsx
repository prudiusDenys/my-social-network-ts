import React from "react";
import classes from "./AllMessages.module.css";
import ListMessages from "./ListMessages/ListMessages";
import {
	GotMessagesType,
	SentMessagesType
} from "../../../../../redux/store";
import {Field, InjectedFormProps, reduxForm, reset} from "redux-form";
import {Textarea} from "../../../../../common/FormsControlls/FormsControlls";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";
import {useDispatch} from "react-redux";


type PropsType = {
	sentMessages: Array<SentMessagesType>
	gotMessages: Array<GotMessagesType>
	newMessageText: string
	addMessage: (messageValue: string | undefined) => void
}
type TextAreaType = {
	newMessageBody: string
}

const maxLength100 = maxLengthCreator(100)

const AllMessages = (props: PropsType) => {

	const dispatch = useDispatch()

	let addNewMessage = (formData: TextAreaType) => {
			props.addMessage(formData.newMessageBody)
		dispatch(reset('dialogAddMessageForm'));
	}

	return (
		<div className={classes.allMessages}>
			<div className={classes.title}>
				Write your message
			</div>
			<div className={classes.message}>
				<AddMessageFormRedux onSubmit={addNewMessage} />
			</div>
			<ListMessages sentMessages={props.sentMessages}
										gotMessages={props.gotMessages}/>
		</div>
	)
}


const AddMessageForm : React.FC<InjectedFormProps<TextAreaType>> = (props) => {
	return(
		<form onSubmit={props.handleSubmit} className={classes.message}>
				<div>
					<Field component={Textarea}
								 validate={[requiredField,maxLength100]} name={'newMessageBody'} placeholder={'Your message...'}/>
					<button>Send message</button>
				</div>
		</form >
	)
}

const AddMessageFormRedux = reduxForm<TextAreaType>({form: 'dialogAddMessageForm'})(AddMessageForm)

export default AllMessages;
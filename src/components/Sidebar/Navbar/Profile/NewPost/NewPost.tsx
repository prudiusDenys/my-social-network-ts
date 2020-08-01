import React, {ChangeEvent} from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";
import {
	AddMessageActionType,
	AddPostActionType,
	OnChangeInputActionType,
	OnChangeTextareaActionType
} from "../../../../../redux/State";

type PropsType = {
	dispatch:(action: AddPostActionType | OnChangeInputActionType | AddMessageActionType | OnChangeTextareaActionType)=>void
	inputValue: string
}

const NewPost = (props: PropsType) => {

	let onChange = React.createRef<HTMLInputElement>();

	let onClickHandler = () => {
		let inputValue = onChange.current?.value;
		props.dispatch({type: 'ADD-POST', inputValue: inputValue})
	}

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.dispatch({type: 'ON_CHANGE_INPUT', inputValue: e.currentTarget.value})
	}

	return (
		<div className={classes.newPost}>
				<Avatar/>
			<div className={classes.input}>
				<input onChange={onChangeHandler} ref={onChange} type="text" placeholder={'Say something'} value={props.inputValue}/>
				<button onClick={onClickHandler}>SHARE</button>
			</div>
		</div>
	)
}
export default NewPost;
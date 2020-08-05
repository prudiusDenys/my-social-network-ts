import React, {ChangeEvent} from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";
import {ActionsTypes} from "../../../../../redux/store";
import {addPostActionCreator, onChangeInputActionCreator} from "../../../../../redux/profileReducer";

type PropsType = {
	dispatch:(action: ActionsTypes)=>void
	inputValue: string
}


const NewPost = (props: PropsType) => {

	let onChange = React.createRef<HTMLInputElement>();

	let onClickHandler = () => {
		let inputValue = onChange.current?.value;
		props.dispatch(addPostActionCreator(inputValue))
	}

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let inputValue = e.currentTarget.value
		props.dispatch(onChangeInputActionCreator(inputValue))
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
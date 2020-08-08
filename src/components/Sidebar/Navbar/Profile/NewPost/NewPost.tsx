import React, {ChangeEvent} from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";

type PropsType = {
	inputValue: string
	addPost:(inputValue: string | undefined)=>void
	onChangeInput:(inputValue: string)=>void
}

const NewPost = (props: PropsType) => {

	let onChange = React.createRef<HTMLInputElement>();

	let onClickHandler = () => {
		props.addPost(onChange.current?.value)
	}

	let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.onChangeInput(e.currentTarget.value)
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
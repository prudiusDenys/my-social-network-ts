import React from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
	// inputValue: string
	addPost: (inputValue: string) => void
}
type NewPostType = {
	newPost: string
}

const NewPost = (props: PropsType) => {

	const addNewPost = (formData: NewPostType) => {
		props.addPost(formData.newPost)
	}

	return (
		<div className={classes.newPost}>
			<Avatar/>
			<div className={classes.input}>
				<NewPostRedux onSubmit={addNewPost}/>
			</div>
		</div>
	)
}

const newPostForm: React.FC<InjectedFormProps<NewPostType>> = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field component={'input'} name={'newPost'} placeholder={'Say something'}/>
			<button>SHARE</button>
		</form>
	)
}

const NewPostRedux = reduxForm<NewPostType>({form: 'profileAddNewPostForm'})(newPostForm)

export default NewPost;
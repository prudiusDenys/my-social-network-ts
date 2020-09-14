import React from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";
import {Input} from "../../../../../common/FormsControlls/FormsControlls";

type PropsType = {
	// inputValue: string
	addPost: (inputValue: string) => void
}
type NewPostType = {
	newPost: string
}

const maxLength10 = maxLengthCreator(10)

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
			<Field component={Input} name={'newPost'} placeholder={'Say something'}
						 validate={[requiredField, maxLength10]}/>
			<button>SHARE</button>
		</form>
	)
}

const NewPostRedux = reduxForm<NewPostType>({form: 'profileAddNewPostForm'})(newPostForm)

export default NewPost;
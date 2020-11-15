import React from "react";
import classes from "./NewPost.module.css";
import Avatar from "../../../../../common/Avatar/Avatar";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../../../utils/validators/validators";
import {Input} from "../../../../../common/FormsControlls/FormsControlls";
import {reset} from 'redux-form';
import {useDispatch} from "react-redux";

type PropsType = {
	addPost: (inputValue: string) => void
}
type NewPostType = {
	newPost: string
}

const maxLength10 = maxLengthCreator(10)

const NewPost = (props: PropsType) => {

	const dispatch = useDispatch()

	const addNewPost = (formData: NewPostType) => {
		props.addPost(formData.newPost)
		dispatch(reset('profileAddNewPostForm'));
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
			<form style={{display: 'flex'}} onSubmit={props.handleSubmit}>
				<Field component={Input} name={'newPost'} placeholder={'Say something'}
							 validate={[requiredField, maxLength10]}/>
				<button>SHARE</button>
			</form>
	)
}

const NewPostRedux = reduxForm<NewPostType>({form: 'profileAddNewPostForm'})(newPostForm)

export default NewPost;
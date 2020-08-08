import React from "react";
import {ActionsTypes} from "../../../../../redux/store";
import {addPostActionCreator, onChangeInputActionCreator} from "../../../../../redux/profileReducer";
import NewPost from "./NewPost";

type PropsType = {
	dispatch:(action: ActionsTypes)=>void
	inputValue: string
}


const NewPostContainer = (props: PropsType) => {

	let addPost = (inputValue: string | undefined) => {
		props.dispatch(addPostActionCreator(inputValue))
	}

	let onChangeInput = (inputValue: string) => {
		props.dispatch(onChangeInputActionCreator(inputValue))
	}

	return <NewPost addPost={addPost}
									onChangeInput={onChangeInput}
									inputValue={props.inputValue}/>
}
export default NewPostContainer;
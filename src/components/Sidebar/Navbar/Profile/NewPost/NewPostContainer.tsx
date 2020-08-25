import React from "react";
import {addPostActionCreator, onChangeInputActionCreator} from "../../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {StateType} from "../../../../../redux/store";




let mapStateProps = (state: StateType) => {
	return {
		inputValue: state.profile.inputValue,
	}
}

let mapDispatchProps = (dispatch: any) => {
	return {
		addPost: (inputValue: string | undefined) => {
			dispatch(addPostActionCreator(inputValue))
		},
		onChangeInput: (inputValue: string) => {
			dispatch(onChangeInputActionCreator(inputValue))
		},
	}
}

const NewPostContainer = connect(mapStateProps, mapDispatchProps)(NewPost)
export default NewPostContainer;
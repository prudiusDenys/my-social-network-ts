import React from "react";
import {addPostActionCreator} from "../../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {StateType} from "../../../../../redux/store";




let mapStateProps = (state: StateType) => {
	return {
		// inputValue: state.profile.inputValue,
	}
}

let mapDispatchProps = (dispatch: any) => {
	return {
		addPost: (inputValue: string) => {
			dispatch(addPostActionCreator(inputValue))
		}
	}
}

const NewPostContainer = connect( mapStateProps,mapDispatchProps)(NewPost)
export default NewPostContainer;
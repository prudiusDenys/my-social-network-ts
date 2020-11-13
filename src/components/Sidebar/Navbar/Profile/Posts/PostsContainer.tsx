import React from "react";
import {StateType} from "../../../../../redux/store";
import {connect} from "react-redux";
import Posts from "./Posts";


let mapStateProps = (state: StateType) => {
	return {
		postData: state.profile.postData
	}
}

const PostsContainer = connect(mapStateProps)(Posts)

export default PostsContainer;
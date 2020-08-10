import React from "react";
import {addPostActionCreator, onChangeInputActionCreator} from "../../../../../redux/profileReducer";
import NewPost from "./NewPost";
import StoreContext from "../../../../../StoreContext";


const NewPostContainer = () => {

	return (
		<StoreContext.Consumer>
			{(store) => {
				let state = store.getState();

				let addPost = (inputValue: string | undefined) => {
					store.dispatch(addPostActionCreator(inputValue))
				}

				let onChangeInput = (inputValue: string) => {
					store.dispatch(onChangeInputActionCreator(inputValue))
				}

				return <NewPost addPost={addPost}
												onChangeInput={onChangeInput}
												inputValue={state.profile.inputValue}/>}
			}
		</StoreContext.Consumer>
	)
}
export default NewPostContainer;
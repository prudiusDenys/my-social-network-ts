import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import State, {addMessage, addPost, onChangeInput, onChangeTextarea, subscribe} from "./redux/State";


let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App State = {State} addPost={addPost} onChangeInput = {onChangeInput} onChangeTextarea={onChangeTextarea} addMessage={addMessage}/>
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree()
subscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

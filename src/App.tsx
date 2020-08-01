import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Sidebar/Navbar/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Sidebar/Navbar/Dialogs/Dialogs";
import News from "./components/Sidebar/Navbar/News/News";
import Settings from "./components/Sidebar/Navbar/Settings/Settings";
import Music from "./components/Sidebar/Navbar/Music/Music";
import {
	AddMessageActionType,
	AddPostActionType,
	OnChangeInputActionType,
	OnChangeTextareaActionType,
	StateType
} from "./redux/State";


type propsType = {
	State: StateType
	dispatch: (action: AddPostActionType | OnChangeInputActionType | AddMessageActionType | OnChangeTextareaActionType) => void
}

function App(props: propsType) {
	return (
		<BrowserRouter>
			<div className="App">
				<Header/>
				<Sidebar/>
				<div className='content-wrapper'>
					<Route path={'/profile'} render={() => <Profile dispatch={props.dispatch}
																													postData={props.State.Profile.postData}
																													inputValue={props.State.Profile.inputValue}
					/>}/>
					<Route path={'/dialogs'} render={() => <Dialogs dispatch={props.dispatch}
																													userData={props.State.Dialogs.contactsData}
																													sentMessages={props.State.Dialogs.sentMessages}
																													gotMessages={props.State.Dialogs.gotMessages}
																													newMessageText={props.State.Dialogs.newMessageText}
					/>}/>
					<Route path={'/music'} render={() => <Music/>}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

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
import {StateType} from "./redux/State";


type propsType = {
	State: StateType
}

function App(props: propsType) {
	return (
		<BrowserRouter>
			<div className="App">
				<Header/>
				<Sidebar/>
				<div className='content-wrapper'>
					<Route path={'/profile'} render={() => <Profile postData={props.State.Profile.postData}/>}/>
					<Route path={'/dialogs'} render={() => <Dialogs userData={props.State.Dialogs.contactsData}
																													sentMessages={props.State.Dialogs.sentMessages}
																													gotMessages={props.State.Dialogs.gotMessages}/>}/>
					<Route path={'/music'} render={() => <Music/>}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

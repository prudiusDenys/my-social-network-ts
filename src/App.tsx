import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import Dialogs from "./components/Sidebar/Navbar/Dialogs/Dialogs";
import News from "./components/Sidebar/Navbar/News/News";
import Settings from "./components/Sidebar/Navbar/Settings/Settings";
import Music from "./components/Sidebar/Navbar/Music/Music";
import UsersContainer from "./components/Sidebar/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Sidebar/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<HeaderContainer/>
				<Sidebar/>
				<div className='content-wrapper'>
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
					<Route path={'/dialogs'} render={() => <Dialogs/>}/>
					<Route path={'/users'} render={() => <UsersContainer/>}/>
					<Route path={'/music'} render={() => <Music/>}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

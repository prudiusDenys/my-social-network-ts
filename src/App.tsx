import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/Sidebar/Navbar/News/News";
import Settings from "./components/Sidebar/Navbar/Settings/Settings";
import Music from "./components/Sidebar/Navbar/Music/Music";
import UsersContainer from "./components/Sidebar/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Sidebar/Navbar/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Sidebar/Navbar/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-Reducer";
import Preloader from "./components/common/preloader/Preloader";


class App extends React.Component<any, any> {

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader/>
		}
		return (
			<div className="App">
				<HeaderContainer/>
				<Sidebar/>
				<div className='content-wrapper'>
					<Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
					<Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
					<Route path={'/users'} render={() => <UsersContainer/>}/>
					<Route path={'/music'} render={() => <Music/>}/>
					<Route path={'/news'} render={() => <News/>}/>
					<Route path={'/settings'} render={() => <Settings/>}/>
					<Route path={'/login'} render={() => <Login/>}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state: any) => ({
	initialized: state.app.initialized
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
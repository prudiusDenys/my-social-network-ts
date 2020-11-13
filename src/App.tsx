import React, {Suspense} from 'react';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import News from "./components/Sidebar/Navbar/News/News";
import Settings from "./components/Sidebar/Navbar/Settings/Settings";
import Music from "./components/Sidebar/Navbar/Music/Music";
import UsersContainer from "./components/Sidebar/Navbar/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-Reducer";
import Preloader from "./components/common/preloader/Preloader";
import {WithSuspense} from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Sidebar/Navbar/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Sidebar/Navbar/Profile/ProfileContainer'));


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
						<Switch>
						<Route exact path={'/'} render={() => <Redirect from="/" to="/profile" />}/>
						<Route path={'/profile/:userId?'} render={WithSuspense(ProfileContainer)}/>
						<Route path={'/dialogs'} render={() => {
							return (
								<Suspense fallback={<div>Loading...</div>}>
									<DialogsContainer/>
								</Suspense>
							)
						}}/>
						<Route path={'/users'} render={() => <UsersContainer/>}/>
						<Route path={'/music'} render={() => <Music/>}/>
						<Route path={'/news'} render={() => <News/>}/>
						<Route path={'/settings'} render={() => <Settings/>}/>
						<Route path={'/login'} render={() => <Login/>}/>
						<Route render={() => <div>404 NOT FOUND</div>}/>
						</Switch>
					</div>

			</div>
		)
	}
}

const mapStateToProps = (state: any) => ({
	initialized: state.app.initialized
})

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
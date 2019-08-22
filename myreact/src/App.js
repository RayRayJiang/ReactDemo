import React from 'react';
import './App.scss';
import routes from './routes'

import { Redirect, Route, NavLink, withRouter, Switch } from 'react-router-dom';


function App(props) {

	const pathname = props.location.pathname

	return (
		<div className="App">

			<Switch>
				{/* 重定向 */}
				<Redirect from="/" to="/home" exact />
				{
					routes.map((e) => <Route {...e} />)
				}
			</Switch>


			{/* 底部导航 */}
			{/* <div className="nav">
				<NavLink to="/home">首页</NavLink>
				<NavLink to="/test">哈哈</NavLink>
			</div> */}
		</div>
	);


}

export default withRouter(App);

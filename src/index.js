import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Home from './container/homeNew';
// import Collection from './container/collection';
import CollectionNew from './container/collectionNew';
import About from './container/about';
import AppHome from './containerApp/home';
import Wonder from './container/wonder';
import Renewed from './container/renewed';
import L7fz from './container/l7fz';
import Life from './container/life';
import Illustration from './container/illustration';
console.log(window.screen.width);

const windowWidth = window.screen.width;

ReactDOM.render(
	<React.StrictMode>
		{windowWidth > 720 ? (
			<Router>
				<Route path='/home' component={Home} />
				<Route path='/collection' component={CollectionNew} />
				<Route path='/wonder' component={Wonder} />
				<Route path='/illustration' component={Illustration} />
				<Route path='/renewed' component={Renewed} />
				<Route path='/l7fz' component={L7fz} />
				<Route path='/life' component={Life} />
				<Route path='/about' component={About} />
				<Route exact path='/'>
					<Home />
				</Route>
			</Router>
		) : (
			<Router>
				<Route path='/home' component={AppHome} />
				<Route exact path='/'>
					<AppHome />
				</Route>
			</Router>
		)}
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

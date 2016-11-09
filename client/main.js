import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

import App from './components/app'; 
import HomeMain from './components/home/home_main'; 
import AdminMain from './components/admin/admin_main'; 
import NannyApplication from './components/nanny_application'; 

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeMain} /> 
			<Route path="for-nannies" component={NannyApplication} /> 
			<Route path="admin-hut" component={AdminMain} /> 
		</Route>
	</Router>
); 

Meteor.startup(() => {
	ReactDOM.render(routes, document.querySelector('.app-container')); 
}); 
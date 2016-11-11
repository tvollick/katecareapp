import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Router, Route, IndexRoute, browserHistory } from 'react-router'; 

import App from './components/app'; 
import HomeMain from './components/home/home_main'; 
import AdminMain from './components/admin/admin_main'; 
import NannyPage from './components/forTheNanny/for_the_nanny'; 
import ParentPage from './components/forTheParents/parent_main'; 
import ApprovedList from './components/admin/approved_nanny_list'; 
import AdminNannyPage from './components/admin/nannies'; 
import AdminFamiliesPage from './components/admin/families'; 
import AdminDashboard from './components/admin/admin_dashboard'; 

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeMain} /> 
			<Route path="nannies" component={NannyPage} /> 
			<Route path="parents" component={ParentPage} /> 
			<Route path="admin" component={AdminMain} > 
				<IndexRoute component={AdminDashboard} /> 
				<Route path="families" component={AdminFamiliesPage} /> 
				<Route path="nannies" component={AdminNannyPage} />	
			</Route>
		</Route>
	</Router>
); 

Meteor.startup(() => {
	ReactDOM.render(routes, document.querySelector('.app-container')); 
}); 
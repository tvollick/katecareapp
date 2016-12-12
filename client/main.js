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

import LoginModal from './components/accounts/login_modal'; 

import UserMain from './components/accounts/user_main'; 
import NannyLogin from './components/accounts/nanny/nanny'; 
import NannyStep1 from './components/accounts/nanny/nanny_step1'; 
import ResumeForm from './components/accounts/nanny/nanny_resume'; 
import NannyReferencesForm from './components/accounts/nanny/nanny_references'; 

/**
	*	Nannies need to be able to do the following: 
	*		- Login / Create an account
	*			- possibly through facebook
	*		- Fill out nanny application
	*			- also be able to edit nanny application
	*				- edit single line item 
	*		- Fill out resume/profile 
	*		- Upload Documents
	*		- Delete Documents
	*		- If steps are complete:
	*			- Edit profile
	*			- View Profile
	*		
	*		- FUTURE FEATURES
	*		- Contact Kate
	*
	*/


/**
	*	ADMIN FEATURES
	*	Login as Admin
	*	View Notifications when users do something
	* View list of Nannies
	*	View Nannies application Status 
	*	View Nanny Profile
	*	Give Family Access to Nanny Profile 
	*
	*/

/**
	* FAMILY ACCOUNT FEATURES
	* Login
	*	Start/Edit application
	*	Start/Edit out info for each child 
	*	View Approved Nanny Profile Page
	*
	*/ 



const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeMain} /> 
			<Route path="nannies" component={NannyPage} /> 
			<Route path="parents" component={ParentPage} /> 

			<Route path="account" component={UserMain} > 
				<IndexRoute component={LoginModal} /> 
				<Route path="nanny-application" component={NannyStep1} /> 
				<Route path="nanny-resume-form" component={ResumeForm} /> 
				<Route path="nanny-references" component={NannyReferencesForm} /> 
			</Route> 

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

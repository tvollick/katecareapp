import React from 'react'; 
import ReactDOM from 'react-dom'; 

import Header from './components/header'; 
import NannyApplication from './components/nanny_application'; 
import UnapprovedNannies from './components/nanny_list'; 
import ApprovedList from './components/approved_nanny_list'; 

const App = () => {
	return (
		<div className="app-main">
			<Header /> 
			<NannyApplication /> 
			<UnapprovedNannies /> 
			<ApprovedList /> 
		</div>
	); 
}; 

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.app-container')); 
}); 
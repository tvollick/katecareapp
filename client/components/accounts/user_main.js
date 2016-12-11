import React, { Component } from 'react'; 
import LoginModal from './login_modal'; 
import { createContainer } from 'meteor/react-meteor-data'; 

import NannyDashboard from './nanny/nanny_dashboard'; 

class UserMain extends Component { 

	// if Nanny is not logged in render login template 
	renderView () { 

		// if user is logged in 
		// if (this.props.currentUser) { 

		// 	if (Roles.userIsInRole(this.props.currentUser._id, 'nanny')) {
		// 		return <NannyDashboard userId={this.props.currentUser._id} /> 
		// 	} else if (Roles.userIsInRole(this.props.currentUser._id, 'family')) { 
		// 		console.log('family'); 
		// 	} else {``
		// 		console.log("neither nanny nor family"); 
		// 	}

		// // else show login modal
		// } else { 
		// 	return (
		// 		<LoginModal /> 
		// 	); 
		// }

	}

	// else render profile? 

	render () {
		return (
			<div className="container"> 	
				{this.props.children}
			</div> 
		); 
	}

}

export default createContainer( () => {
	return {
		currentUser: Meteor.user()
	}; 
}, UserMain); 
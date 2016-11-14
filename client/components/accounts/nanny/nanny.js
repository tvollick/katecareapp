import React, { Component } from 'react'; 
import LoginModal from './../login_modal'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import NannyDashboard from './nanny_dashboard'; 

class NannyLogin extends Component {

	// if Nanny is not logged in render login template 
	renderNannyLogin () { 

		// if user is logged in 
		if (this.props.currentUser) { 

			if (Roles.userIsInRole(this.props.currentUser._id, 'nanny')) {
				return <NannyDashboard /> 
			} else if (Roles.userIsInRole(this.props.currentUser._id, 'family')) { 
				console.log('family'); 
			} else {
				console.log("neither nanny nor family"); 
			}

		// else show login modal
		} else { 
			return (
				<LoginModal /> 
			); 
		}

	}


	// else render profile? 

	render () {
		return (
			<div className="container"> 	
				<h3> NannyLogin</h3> 
				{this.renderNannyLogin()}
			</div> 
		); 
	}

}

export default createContainer( () => {
	return {
		currentUser: Meteor.user()
	}; 
}, NannyLogin); 
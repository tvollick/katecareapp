import React, {Component} from 'react'; 
import {createContainer} from 'meteor/react-meteor-data'; 
import { Link } from 'react-router'; 
import { Meteor } from 'meteor/meteor'; 
class SignInOut extends Component {

	renderSignInOut () { 
		if (this.props.currentUser) { 
			return (
				<a href="#" onClick={this.onLogoutClick}> Log Out </a> 
			); 
		} else { 
			return (
				<Link to="/account"> Login </Link> 
			); 
		}
	}

	onLogoutClick (e) { 
		e.preventDefault(); 
		Meteor.logout(); 
	}

	render () {

		return (
			<li className="sign-in-out"> 
				{this.renderSignInOut()}
			</li> 
		); 

	}

}

export default createContainer( () => {
	return {
		currentUser: Meteor.user()
	}; 
}, SignInOut); 
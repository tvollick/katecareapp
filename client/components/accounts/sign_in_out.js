import React, {Component} from 'react'; 
import {createContainer} from 'meteor/react-meteor-data'; 
import { Link } from 'react-router'; 
import { Meteor } from 'meteor/meteor'; 
class SignInOut extends Component {

	constructor (props) { 
		super(props); 
		this.state={toggleState: ""}
	}

	onLogoutClick (e) { 
		e.preventDefault(); 
		Meteor.logout(); 
	}

	onToggleClick (e) { 
		e.preventDefault(); 

		if (this.state.toggleState === 'open') { 
			this.setState({toggleState: ''}); 
		} else {
			this.setState({toggleState: 'open'}); 			
		}
	}

	render () {
		if (this.props.currentUser) { 
			return (
				
				<li className={`sign-in-out dropdown ${this.state.toggleState}`}>
					<a href="#" className="dropdown-toggle" role="button" onClick={this.onToggleClick.bind(this)}>Account</a>
					<ul className="dropdown-menu">
						<li>
							<Link to="/account"> View Profile </Link> 
						</li> 
						<li>
							<a href="#" onClick={this.onLogoutClick}> Log Out </a> 
						</li> 
					</ul> 
				</li> 
			); 
		} else { 
			return (
				<li className="sign-in-out"> 
					<Link to="/account"> Login </Link> 
				</li> 
			); 
		}
	}

}

export default createContainer( () => {
	return {
		currentUser: Meteor.user()
	}; 
}, SignInOut); 
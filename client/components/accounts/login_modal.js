import React, {Component} from 'react'; 
import {browserHistory} from 'react-router'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import ReactDOM from 'react-dom'; 
import {Template } from 'meteor/templating'; 
import { Blaze } from 'meteor/blaze'; 

class LoginModal extends Component { 

	componentDidMount () { 
		this.view = Blaze.render(Template.atForm, ReactDOM.findDOMNode(this.refs.login)); 			
	}

	componentWillUnmount () {
		Blaze.remove(this.view); 
	}

	renderLoginModal () { 
		return (
			<div className="login-modal">
				<div ref="login"> 
				</div> 
			</div> 
		); 
	}

	renderView () { 
		if (!this.props.currentUser) { 
			return this.renderLoginModal(); 
		} else if (Roles.userIsInRole(this.props.currentUser._id,'nanny')) { 
			console.log('nanny-role'); 
			browserHistory.push('/account/nanny-dashboard'); 
		}
	}

	render () { 
		return (
			<div>
				{this.renderView()}
			</div>
		); 
	}
}


export default createContainer(() => {
	return { 
		currentUser: Meteor.user()
	};
}, LoginModal); 
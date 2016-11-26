import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import ReactDOM from 'react-dom'; 
import {Template } from 'meteor/templating'; 
import { Blaze } from 'meteor/blaze'; 



class LoginModal extends Component { 

	componentDidMount () { 
		this.view = Blaze.render(Template.atForm, ReactDOM.findDOMNode(this.refs.container)); 			
	}

	componentWillUnmount () {
		Blaze.remove(this.view); 
	}

	render () {

		return (
			<div className="login-modal">
				<h3> Login Modal </h3> 
				<div ref="container"> 
				</div> 
			</div> 
		); 
	}
}

export default LoginModal; 


import React, { Component } from 'react'; 

import AdminHeader from './admin_header'; 
import Accounts from './admin_accounts'; 

class AdminMain extends Component {
	constructor (props) {
		super (props); 
	}

	allowAccess () {


		// if logged in show children; 

		// else show logged in panel 
		return (
			<div className="login-panel"> 
				<Accounts /> 
			</div> 
		)

	}

	render () {
		return (
			<div>
				<AdminHeader /> 
				<div className="container">
					{this.allowAccess()} 
					{this.props.children}
				</div>
			</div>
		); 
	}
}

export default AdminMain; 
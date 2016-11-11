import React, { Component } from 'react'; 

import AdminHeader from './admin_header'; 


class AdminMain extends Component {
	constructor (props) {
		super (props); 
	}
	render () {
		console.log(this.props.children);
		return (
			<div>
				<AdminHeader /> 
				<div className="container">
					{this.props.children}
				</div>
			</div>
		); 
	}
}

export default AdminMain; 
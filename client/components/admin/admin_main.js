import React, { Component } from 'react'; 

import UnapprovedNannies from './nanny_list'; 
import ApprovedList from './approved_nanny_list'; 


class AdminMain extends Component {
	render () {
		return (
			<div className="container">
				<h2> Admin Dashboard </h2>
				<UnapprovedNannies /> 
				<ApprovedList /> 
			</div>
		); 
	}
}

export default AdminMain; 
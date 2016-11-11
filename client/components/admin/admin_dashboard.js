import React, { Component } from 'react'; 

import AdminPanel from './admin_panel'; 

class AdminDashboard extends Component { 

	render () { 
		return (
			<div>
				<h2> Admin Dashboard </h2>
				<div className="row">
					<AdminPanel dest="families" title="Families"/>
					<AdminPanel dest="nannies" title="Nannies"/>
				</div>
			</div>
		); 
	}

}

export default AdminDashboard; 
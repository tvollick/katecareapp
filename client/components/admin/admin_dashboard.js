import React, { Component } from 'react'; 

import AdminPanel from './admin_panel'; 
import NotificationsList from './notifications_list'; 

class AdminDashboard extends Component { 

	render () { 
		return (
			<div>
				<h2> Admin Dashboard </h2>
				<div className="row">
					<NotificationsList /> 
				</div>
			</div>
		); 
	}

}

export default AdminDashboard; 
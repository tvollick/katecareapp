import React, { Component } from 'react'; 

import ApprovedNannyList from './approved_nanny_list'; 
import NannyAppList from './nanny_app_list'; 

class AdminNannyPage extends Component { 
	render () {
		return (
			<div className="container">
				<NannyAppList /> 
				<ApprovedNannyList /> 
			</div>
		); 
	}
}

export default AdminNannyPage; 
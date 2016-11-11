import React, { Component } from 'react'; 



import AdminFamiliesList from './families_list'; 

class AdminFamiliesPage extends Component { 

	render () { 
		return (
			<div> 
				<h2> Families Page </h2> 
				<AdminFamiliesList /> 
			</div> 
		); 
	}

}

export default AdminFamiliesPage; 
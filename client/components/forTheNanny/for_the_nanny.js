import React, { Component } from 'react'; 

import NannyApplication from './nanny_application'; 

class NannyPage extends Component {
	render () { 
		return (
			<div className="container">
				<h2> For The Nannies </h2> 
				<div className="dummy-content"></div>
				<NannyApplication /> 
			</div>
		); 		
	} 
}

export default NannyPage; 
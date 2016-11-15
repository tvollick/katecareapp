import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

class NannyPage extends Component {
	render () { 
		return (
			<div className="container">
				<h2> For The Nannies </h2> 
				<div className="dummy-content"></div>
				<Link to="/account" className="btn btn-default"> 
					Kate Care Portal 
				</Link> 
			</div>
		); 		
	} 
}

export default NannyPage; 
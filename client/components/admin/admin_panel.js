import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

class AdminPanel extends Component { 
	constructor (props) { 
		super (props); 
	}

	renderLink () {

	}

	render () {
		return (
			<div className="col-md-6">
				<Link to={`/admin/${this.props.dest}`} className="admin-panel-link">
					<div className="admin-panel">
						<h4>{this.props.title}</h4>
					</div>
				</Link>
			</div>
		); 
	}

}


export default AdminPanel; 
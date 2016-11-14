import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

class Login extends Component {

	renderLogin () {
		if (this.props.children) {
			return this.props.children; 
		} else {
			return (
			<div className="btn-group"> 
				<Link to="/account/nanny" className="btn btn-default"> Nanny Login </Link> 
			</div> 
			); 
		}
	}

	render () {
		return (
			<div>
				{this.renderLogin()}
			</div>
		); 

	}
}


export default Login; 
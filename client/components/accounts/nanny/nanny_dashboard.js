import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import NannyApplication from './nanny_application'; 
import { Link } from 'react-router'; 


// really should change this module name to NannyApplication or something
import {Nannies} from '../../../../imports/collections/nannies'; 

class NannyDashboard extends Component { 

	renderApplication () { 
		// if user has completed application
		if (this.props.application.length) { 
			return (
				<div>
					<h4> You've completed your application! Continue to the next steps! </h4>
					<Link className="btn btn-default" to="/test"> Edit Application </Link>
				</div>
			);  
		}  else { 
			// if user has not completed application 
			return (
				<NannyApplication userId={this.props.userId} /> 
			); 
		}
	}

	renderNannyApplication () {
		return (
			<h1> newNannyApp </h1> 
		); 
	}

	render () { 
		return (
			<div> 
				<h2> NannyDashboard</h2> 
				<ul className="list-group"> 
					<li className="list-group-item"> 
						<h3> Step 1: Nanny Application </h3> 
						{this.renderApplication()}
					</li> 
					<li className="list-group-item">
						<h3> Step 1: Nanny Application </h3> 
						{this.renderNannyApplication()}
					</li> 
					<li className="list-group-item"> 
						<h3> Step 2: Attach Resume </h3> 
					</li> 
				</ul> 
			</div> 
		); 
	}

}

export default createContainer((props) => {
	Meteor.subscribe('nannyProfile'); 
	return { application: Nannies.find().fetch()}; 
}, NannyDashboard); 



import React, { Component } from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Nannies } from '../../imports/collections/nannies'; 

class UnapprovedNannies extends Component { 

	renderUnapproved () { 
		return this.props.nannies.map(nanny => {
			console.log(nanny); 
			return (
				<li key={nanny._id} className="thumb list-group-item">
					<h1> {nanny.firstname} </h1>
					<button onClick={this.handleApprove.bind(this, nanny._id)} type ="button" className="btn btn-success">Approve</button>
					<button onClick={this.handleDelete.bind(this, nanny._id)} type="button" className="btn btn-danger">Delete Application</button>
				</li>
			); 
		}); 
	}

	handleApprove (id) { 
		event.preventDefault(); 
		Meteor.call('nannies.update.approve', id, (error) => {
			if (error) {

			} else {

			}
		}); 
	}

	handleDelete (id) {

		event.preventDefault(); 

		Meteor.call('nannies.delete', id, (error) => {
			if (error) { 

			} else { 

			}
		}); 

	}

	render () { 
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12"> 
						<h1>Unapproved </h1>
						<ul className="list-group">
							{this.renderUnapproved()}
						</ul>
					</div> 
				</div>
			</div>
		); 
	}

}

export default createContainer (() => {
	Meteor.subscribe('nannies'); 
	return { nannies: Nannies.find({approved: false}).fetch()}; 
}, UnapprovedNannies); 
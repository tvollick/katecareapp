import React, { Component } from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Nannies } from '../../../imports/collections/nannies'; 

class ApprovedList extends Component { 

	renderList () {
		return this.props.nannies.map(nanny => {
			return ( 
				<li key={nanny._id} className="thumb list-group-item">
					<h1> {nanny.firstname} </h1>
					<button 
						onClick={ ()=> this.onUnapprove(nanny) }
						type="button" 
						className="btn btn-warning">
						Unapprove
					</button>
				</li>
			); 
		}); 
	}

	onUnapprove (nanny) {
		event.preventDefault(); 
		Meteor.call('nannies.update.unapprove', nanny, (error) => {
			if (error) {
				console.log(error); 
			} else {

			}
		}); 
	}

	render () {
		return (
			<div className="container">
				<h1> Approved </h1>
				<div className="row"> 
					<div className="col-md-12">
						<ul className="list-group">
							{this.renderList()}
						</ul>
					</div>
				</div>
			</div>
		); 
	}
}

export default createContainer (() => {
	Meteor.subscribe('nannies'); 
	return { nannies: Nannies.find({approved: true}).fetch()}; 
}, ApprovedList); 
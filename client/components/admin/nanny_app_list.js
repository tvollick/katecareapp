import React, { Component } from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Nannies } from '../../../imports/collections/nannies'; 

class UnapprovedNannies extends Component { 

	renderUnapproved () { 
		return this.props.nannies.map(nanny => {
			console.log(nanny); 
			return (
				<li key={nanny._id} className="thumb list-group-item">
					<h1> {`${nanny.appData.lastname}, ${nanny.appData.firstname}`} </h1>
					<div className="nanny.appData-info-wrapper"> 
						<span className="phone">{`Phone: ${nanny.appData.phone}`}</span>
						<span className="address">{`Address: ${nanny.appData.street}, ${nanny.appData.citystate}, ${nanny.appData.zip}`}</span> 
					</div>

					<div className="btn-group" > 
						<button 
							className="btn btn-success"
							onClick={ () => this.onApprove(nanny) }
							>
							Approve
						</button>
						<button
							className="btn btn-danger pull-right"
							onClick={ () => this.onRemove(nanny)}>
							Delete Application
						</button>
					</div>
				</li>
			); 
		}); 
	}

	onApprove (id) { 
		event.preventDefault(); 
		Meteor.call('nannies.update.approve', id, (error) => {
			if (error) {

			} else {

			}
		}); 
	}

	onRemove (id) {

		event.preventDefault(); 

		Meteor.call('nannies.remove', id, (error) => {
			if (error) { 

			} else { 

			}
		}); 

	}

	render () { 
		return (
				<div className="row">
					<div className="col-md-12"> 
						<h1>Unapproved </h1>
						<ul className="list-group">
							{this.renderUnapproved()}
						</ul>
					</div> 
				</div>
		); 
	}

}

export default createContainer (() => {
	Meteor.subscribe('adminNannies'); 
	return { nannies: Nannies.find().fetch()}; 
}, UnapprovedNannies); 
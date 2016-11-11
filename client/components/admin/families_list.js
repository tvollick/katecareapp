import React, { Component } from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import { Families } from '../../../imports/collections/families'; 

class AdminFamiliesList extends Component { 

	onRemove (family) {
		event.preventDefault () ; 

		Meteor.call('family.remove', family, (error) => {
			if (error) {

			} else { 

			}
		})
	}

	renderList () { 
		return this.props.families.map(family => {
			return(
				<li className="list-group-item">
					<h2> {family.lastname} </h2>
					<button
						className="btn btn-danger"
						onClick={() => this.onRemove(family) }
					>
						Delete Family
					</button>
				</li>
			); 
		}); 
	}

	render () { 
		return (
			<div>
				<ul className="list-group">
					{this.renderList()}
				</ul>
			</div>
		); 
	}

}

export default createContainer(() => {
	Meteor.subscribe('families'); 
	return { families: Families.find().fetch()}; 
}, AdminFamiliesList); 
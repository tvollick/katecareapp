import React, { Component } from 'react'; 
import {Link} from 'react-router'; 

import { createContainer } from 'meteor/react-meteor-data'; 
import {Nannies} from '../../../../imports/collections/nannies'; 

import InputField from './../../formFields/input_field'; 

class NannyReferencesForm extends Component { 

	constructor (props) {
		super(props); 
		this.state = {isComplete: false}
	}


	renderAddSubmit () {
		// pick up here
	}
	renderForm () {

		return (
			<div className="card">
				<div className="card-block">
					<h4> New Reference </h4> 
					<form>
						<InputField slug="name" label="Name" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
						<InputField slug="phone" label="Phone" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
						<InputField slug="email" label="Email" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
						<InputField slug="available" label="Best time to call (if applicable)" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
					</form>
					{this.renderAddSubmit()}
				</div>
			</div>
		); 

	}

	render () {
		return (
			<div id="nanny-references-form">
				<h1> References </h1>
				<div>
					<h3> Instructions </h3>

				</div>
				{this.renderForm()}
			</div>
		)
	}

}

export default createContainer((props) => {
	const handle = Meteor.subscribe('nannyProfile'); 
	const hasLoaded = handle.ready(); 
	const userData = Nannies.find({}).fetch();

	return {
		userData, 
		hasLoaded
	}; 

}, NannyReferencesForm); 
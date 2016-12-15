import React, { Component } from 'react'; 
import {Link} from 'react-router'; 

import { createContainer } from 'meteor/react-meteor-data'; 
import {Nannies} from '../../../../imports/collections/nannies'; 
import ReferenceCard from './profile_comps/reference_card'; 
import InputField from './../../formFields/input_field'; 

class NannyReferencesForm extends Component { 

	constructor (props) {
		super(props); 
		this.state = {
			isComplete: false, 
			fields: {
				phone: '',
				name: '', 
				email: '',
				available: 'test'
			}, 
			references: []
		}
		this.handleFieldStatusChange = this.handleFieldStatusChange.bind(this); 
		this.handleAddClick = this.handleAddClick.bind(this); 

	}

	handleFieldStatusChange (slug, value) {
		var tempFields = this.state.fields; 

		tempFields[slug] = value; 

		this.setState({fields: tempFields}); 
	}

	formIsComplete () { 
		const fields = this.state.fields; 

		if (fields.phone!=='' && fields.name!==''&&fields.email!=='') 
			return true; 
		else 
			return false;
	}

	addButtonClass () {
		// change with state of form 
		if (this.formIsComplete())
			return "btn btn-primary"; 
		else 
			return "btn btn-primary disabled"
	}

	handleAddClick (e) {
		e.preventDefault(); 

		if (this.formIsComplete()) { 

			const tempReference = this.state.references; 
			tempReference.push(this.state.fields); 
			this.setState({references: tempReference}); 

		} else { 
			// set error state 
			console.log(this.state.references); 
		}
	}

	renderForm () {

		return (
			<div className="card card-block">
				<h4> New Reference </h4> 
				<form>
					<InputField slug="name" label="Name" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
					<InputField slug="phone" label="Phone" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
					<InputField slug="email" label="Email" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
					<InputField slug="available" label="Best time to call (if applicable)" handleFieldStatusChange={this.handleFieldStatusChange} value="" />
					<button
						className={this.addButtonClass()}
						onClick={this.handleAddClick}
					>
						Add Reference
					</button>
				</form>
			</div>
		); 

	}

	renderReferences(){
		return this.state.references.map((reference)=>{
			return (
				<ReferenceCard key={reference.phone} reference={reference} /> 
			); 
		});  
	}

	renderWarning () {
		const references = this.state.references; 

		if (references.length < 3) {
			var warning = ''
			if (references.length === 2) {
				warning = "You need to add 1 more reference before continuing"; 
			} else {
				warning = "You need to add "+(3-references.length)+" more references before continuing"; 
			}

			return (
				<div className="alert alert-warning" role="alert">
  					{warning}
				</div>
			); 
		}
	} 

	handleSaveClick (e) {
		e.preventDefault(); 

		const references = this.state.references; 
		if (references >= 3) {
			// Meteor function to save ref's
			console.log(references); 
		}

	}

	renderSaveReferences () {
		var btnClass='btn btn-success'; 
		const references = this.state.references; 

		if (references.length < 3)
			btnClass = 'btn btn-success disabled'; 

		return (
			<button 
				className={btnClass}
				onClick={this.handleSaveClick}
			>
				Save References
			</button>
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
				{this.renderReferences()}
				{this.renderWarning()}
				{this.renderSaveReferences()}
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
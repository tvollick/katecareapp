import React, {Component} from 'react'; 
import { createContainer } from 'meteor/react-meteor-data'; 
import {Nannies} from '../../../../imports/collections/nannies'; 

import InputField from './../../formFields/input_field'; 
import RadioField from './../../forms/radio_field'; 
import TextareaField from '../../forms/textarea_field'; 
import CheckboxField from '../../forms/checkbox_field'; 


class NannyForm extends Component { 
	constructor (props) {
		super (props); 
		this.state = {complete: false, fields:[
			// fields schema that matches nannies COllection
			{
				slug: 'first_name', 
				value: '', 
				required: true
			}, 
			{
				slug: 'last_name', 
				value: '', 
				required: true
			}, 
			{
				slug: 'phone',
				value: '', 
				required: true
			}, 
			{
				slug: 'street',
				value: '', 
				required: true
			}, 
			{
				slug: 'city',
				value: '', 
				required: true
			}, 
			{
				slug: 'state',
				value: '', 
				required: true
			}, 
			{
				slug: 'zip',
				value: '', 
				required: true
			}
		]}; 

		this.renderFields = this.renderFields.bind(this); 
		this.handleFieldStatusChange = this.handleFieldStatusChange.bind(this); 
		this.handleSubmit = this.handleSubmit.bind(this); 
	}

	handleSubmit (e) {
		e.preventDefault(); 
		
		const fields = this.state.fields; 
		const _id = this.props.userData[0]._id

		Meteor.call('nannies.handleFormSubmit', _id, fields, (error) => {
			if (error)
				console.log('error'); 
		});  

	}

	handleFieldStatusChange (slug, value) {

		var tempFields = this.state.fields; 

		// loop through state.fields and update matched field
		for (var i=0; i<tempFields.length; i++) {
			if (tempFields[i].slug === slug) { 
				var tempObj = tempFields[i]; 
				tempObj.value = value; 
				tempFields[i] = tempObj; 
			}
		}

		this.setState({fields: tempFields})

	}

	// need to set up state with fields... 

	renderFields(user) {

		return user.profile.map((field) => {

			switch(field.inputType) {
				case 'text_field': 
					// do stuff
					return (
						<InputField key={field.slug} slug={field.slug} label={field.label} handleFieldStatusChange={this.handleFieldStatusChange} value={field.value}/> 
					); 
					break;
			}

		}); 

	}

	renderSubmit () {

		const fields = this.state.fields; 

		for ( var i=0; i<fields.length; i++ ) {
			if (fields[i].value==="")
				return (
					<div className="alert alert-danger" role="alert">
 						<strong>Oh snap!</strong> Change a few things up and try submitting again.
					</div>
				); 
		} 

		return (
			<button
				className="btn btn-primary"
				onClick={this.handleSubmit}
				>
				Submit
			</button>
		); 

	}

	// updating fields status is buggy 
	
	renderForm () {
		if (this.props.hasLoaded && this.props.userData.length) {

			var user = this.props.userData[0];
			return (
				<form>
					{this.renderFields(user)}
					{this.renderSubmit()}
				</form>
			); 

		}
	}

	render () {
		return (
			<div> 
				{this.renderForm()}
			</div>
		); 

	}
}

export default createContainer((props)=> {
	const handle = Meteor.subscribe('nannyProfile'); 
	const hasLoaded = handle.ready(); 
	const userData = Nannies.find({}).fetch();
	return {
		userData, 
		hasLoaded
	}; 
}, NannyForm); 
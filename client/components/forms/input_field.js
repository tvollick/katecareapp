import React, { Component } from 'react'; 
import {createContainer} from 'meteor/react-meteor-data'; 

import {UserFields} from '../../../imports/collections/user_fields'; 

class InputField extends Component { 
	constructor (props) {
		super (props); 
		this.state = { error: '', value: '', prevValue: '', dbCollection: null, savedVal: this.props.value }; 
		this.handleChange = this.handleChange.bind(this);  
	}

	handleChange (e) {
		// Meteor.call('field.update', e.target.value)
		if (this.props.field.length) {
			console.log('change'); 
			Meteor.call('field.update', this.props.field[0], e.target.value, (error) => {
				if (error) {
					console.log(error); 
				} else {
					this.setState({error: ''}); 
				}
			}); 
		}
	}


	createField () {
		if (!this.props.loading && !this.props.field.length) {
			Meteor.call('field.create', this.props.user._id, this.props.slug, (error) => {
				if (error) {
					console.log(error); 
				} else {
					this.setState({error: ''}); 
				}
			}); 			
		} 

	}

	deleteAll (e) {
		e.preventDefault(); 
		Meteor.call('field.deleteAll', (error) => {
			if (error) {
				console.log(error);
			} 
		});
	}

	buildClasses () {
		if (this.props.value === '') 
			return "form-group has-warning";
		else 
			return "form-group has-success";  
		
	}

	render () {
		this.createField(); 
		return (
			<div className={this.buildClasses()}>
				<label> {this.props.label} </label> 
				<input className="form-control" value={this.props.value} onChange={this.handleChange} /> 
			</div>
		); 
	}
}

export default createContainer ((props) => { 
	const fieldHandle = Meteor.subscribe('userFields'); 
	const user = Meteor.user(); 
	const loading = !fieldHandle.ready(); 
	const field = UserFields.find({slug: props.slug}).fetch(); 
	const value = (!loading && field.length) ? field[0].value : '';

	return { 
		user,
		loading, 
		field, 
		value
	}; 
}, InputField); 



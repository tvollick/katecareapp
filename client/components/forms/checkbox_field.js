import React, { Component } from 'react'; 
import {createContainer} from 'meteor/react-meteor-data'; 
import {UserFields} from '../../../imports/collections/user_fields'; 

class CheckboxField extends Component {
	constructor (props) {
		super (props); 
		this.state = {
			selectedOptions: this.props.value
		}; 
		this.handleOptionChange = this.handleOptionChange.bind(this); 
		this.updateOptions = this.updateOptions.bind(this); 
	}

	createField(){
		if (!this.props.loading && !this.props.field.length) {
			Meteor.call('field.create', this.props.user._id, this.props.slug, this.props.label, this.props.value, (error) => {
				if (error) {
					console.log(error); 
				} else {
					this.setState({error: ''}); 
				}
			}); 						
		}
	}

	updateOptions(option){
		var tempArr = this.state.selectedOptions; 
		var index = tempArr.indexOf(option); 
		if (index > -1) {
			tempArr.splice(index, 1); 
		} else {
			tempArr.push(option);
		}
		return tempArr; 
	}

	handleOptionChange (e) {
		if (this.props.field.length) {
			Meteor.call(
				'field.update', 
				this.props.field[0], 
				this.updateOptions(e.target.value), 
				(error) => {
				if (error) {
					console.log(error); 
				} else {
					this.setState({error: ''}); 					
				}
			}); 
		}
	}

	renderOptions () {
		return this.props.options.map((option) => {
			return (
				<div key={this.props.slug+option.value} className="form-check">
					<label className="form-check-label">
						<input 
							className="form-check-input"
							type="checkbox"
							value={option.value}
							checked={this.props.value.indexOf(option.value) > -1}
							onChange={this.handleOptionChange}
						/>
						{option.label}
					</label>
				</div>
			); 
		}); 
	}

	render () {
		this.createField(); 
		return (
			<div className="form-group"> 
				<label> { this.props.label } </label> 
				{this.renderOptions()} 
			</div> 
		)
	}

}

export default createContainer( (props) => {
	const fieldHandle = Meteor.subscribe('userFields'); 
	const user = Meteor.user(); 
	const loading = !fieldHandle.ready(); 
	const field = UserFields.find({slug: props.slug}).fetch(); 
	const value = (!loading && field.length) ? field[0].value : []; 

	return {
		user, 
		loading, 
		field, 
		value
	}; 	
}, CheckboxField); 
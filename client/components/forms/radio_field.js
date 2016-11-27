import React, { Component } from 'react'; 
import {createContainer} from 'meteor/react-meteor-data'; 
import {UserFields} from '../../../imports/collections/user_fields'; 

class RadioField extends Component {
	constructor (props) {
		super (props); 
		this.state = {
			selectedOption: this.props.options[0].value
		}; 
		this.handleOptionChange = this.handleOptionChange.bind(this); 
	}

	handleOptionChange (e) {
		if (this.props.field.length) {
			Meteor.call('field.update', this.props.field[0], e.target.value, (error) => {
				if (error) {
					console.log(error); 
				} else {
					this.setState({error: ''}); 					
				}
			}); 
		}
		// this.setState({ selectedOption: e.target.value }); 
	}

	renderOptions () {
		return this.props.options.map((option) => {
			return (
				<div key={this.props.slug+option.value} className="form-check">
					<label className="form-check-label">
						<input 
							className="form-check-input" 
							type="radio" 
							value={option.value} 
							checked={this.props.value===option.value}
							onChange={this.handleOptionChange}
						/> 
						{option.label}
					</label> 
				</div> 
			)
		}); 
	}

	createField(){
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

	render () {
		this.createField(); 
		return (
			<div className="form-group">
				<label> {this.props.label} </label> 
				{this.renderOptions()}
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
}, RadioField); 
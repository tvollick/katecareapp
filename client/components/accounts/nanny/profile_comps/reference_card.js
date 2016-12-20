import React, { Component } from 'react'; 

class ReferenceCard extends Component {
	constructor (props) {
		super (props); 
		this.state = {}; 

		this.handleDelete = this.handleDelete.bind(this); 
	}

	renderField(label, value) {
		if (value) {
			return (
				<li>
					<span className="contact-field-label">{label}</span>
					{value}
				</li>
			); 
		}
	}

	renderCard () {
		const info = this.props.reference; 
		return (
			<ul className="contact-card">
				{this.renderField(
					"Name:",
					info.name
				)}
				{this.renderField(
					"Phone:",
					info.phone
				)}
				{this.renderField(
					"Email:", 
					info.email
				)}
				{this.renderField(
					"Best Time To Call (if applicable)",
					info.availability
				)}
			</ul>
		); 
	}

	handleDelete () {
		this.props.handleDelete(this.props.index); 
	}

	renderDelete() { 
		return (
			<button 
				className="btn btn-danger"
				onClick={this.handleDelete}
			> 
				Remove Reference
			</button> 

		); 
	}

	render () {

		return (
			<div className="card card-block">
				{this.renderCard()}
				{this.renderDelete()}
			</div>
		); 
	}
}

export default ReferenceCard; 
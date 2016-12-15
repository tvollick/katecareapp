import React, { Component } from 'react'; 

class ReferenceCard extends Component {
	constructor (props) {
		super (props); 
		this.state = {}; 
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

	render () {

		return (
			<div className="card card-block">
				{this.renderCard()}
			</div>
		); 
	}
}

export default ReferenceCard; 
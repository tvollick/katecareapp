import React, { Component } from 'react'; 

import InputField from './../../forms/input_field'; 

class NannyApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { }; 
	}

	render () {
		return (
			<div>
				<form>
					<InputField label="First Name" slug="first_name" /> 
					<InputField label="Last Name" slug="last_name" /> 
					<InputField label="Phone" slug="phone" /> 
					<InputField label="Street" slug="street" /> 
					<InputField label="City/State" slug="citystate" /> 
					<InputField label="Zip Code" slug="zip" /> 
				</form> 
			</div>
		); 
	} 
}

export default NannyApplication; 
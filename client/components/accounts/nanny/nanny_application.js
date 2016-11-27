import React, { Component } from 'react'; 

import InputField from './../../forms/input_field'; 
import RadioField from './../../forms/radio_field'; 

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
					<RadioField 
						label="Can you legally work in the US?" 
						slug="legal_citizen" 
						options={[
							{
								label: "Yes", 
								value: 'yes'
							}, 
							{
								label: 'No', 
								value: 'no'
							}
						]}
					/> 
				</form> 
			</div>
		); 
	} 
}

export default NannyApplication; 
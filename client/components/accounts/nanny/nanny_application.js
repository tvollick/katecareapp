import React, { Component } from 'react'; 
import InputField from './../../forms/input_field'; 
import RadioField from './../../forms/radio_field'; 
import TextareaField from '../../forms/textarea_field'; 
import CheckboxField from '../../forms/checkbox_field'; 

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
					<hr/>
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
					<TextareaField 
						label="If you answered yes, please explain your authorization(legal resident, visa ect.)"
						slug="legal_description"
					/> 
					<hr/>
					<CheckboxField
						label="Are you looking for a live in or live out position?"
						slug="live_in_out"
						options={[
							{
								label: "Live In", 
								value: "live_in"
							}, 
							{
								label: "Live Out", 
								value: "live_out"
							}, 
							{
								label: "Any", 
								value: "any"
							}
						]}
					/>										
				</form> 
			</div>
		); 
	} 
}

export default NannyApplication; 
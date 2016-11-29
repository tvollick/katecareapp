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
					<InputField 
						label="Do you have any allergies(dogs, cats, ect.)?"		
						slug="allergies"
					/> 
					<InputField
						label="What is your desired hourly/salary range?"
						slug="salary"
					/>	
					<RadioField 
						label="Are you comfortable with light housekeeping and meal prep related to the children?" 
						slug="housekeeping" 
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
					<RadioField 
						label="Are you currently taking any medications that could impair your judgement?" 
						slug="medications" 
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
					<RadioField 
						label="Do you have a physical condition that might impair or prevent your ability to perform any reasonably physically act normally required to care for children?"
						slug="physical_condition" 
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
						label="If you answered yes, please explain."
						slug="physical_condition_expl"
					/> 	
					<hr /> 
					<InputField
						label="How did you hear about Kate Care?"
						slug="referral"
					/>
					<InputField
						label="Were you referred by someone? If yes, who?"
						slug="referred_by"
					/>									
					<hr /> 
					<CheckboxField 
						label=""		
						slug="truth"
						options={[
							{
								label: "I certify that to the best of my ability I have answered truthfully. If any information is found to be false or misrepresenting it will be sufficient cause to cancel my application",
								value: "true"
							}
						]}
					/>
				</form> 
			</div>
		); 
	} 
}

export default NannyApplication; 
import React, { Component } from 'react'; 
import InputField from './../../forms/input_field'; 
import RadioField from './../../forms/radio_field'; 
import TextareaField from '../../forms/textarea_field'; 
import CheckboxField from '../../forms/checkbox_field'; 

import {Applications} from '../../../../imports/collections/applications'; 
import {createContainer} from 'meteor/react-meteor-data'; 

class NannyApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { }; 
	}

	// componentWillMount () {
	// 	Meteor.call('application.deleteAll', (error) => {
	// 		if (error) 
	// 			console.log(error); 
	// 	}); 
	// }

	createAppCollection () {

		if(!this.props.loading && !this.props.application.length){
			console.log('create'); 
			Meteor.call('application.create', this.props.appSlug, (error) => {
				if (error) { 
					console.log(error); 
				} 
			})
		} else if (!this.props.loading && this.props.application.length) {
			console.log(this.props.application[0], 'application'); 
		}
	}

	render () {
		this.createAppCollection(); 
		return (
			<div>
				<form className="test">
					<InputField appSlug={this.props.appSlug} label="First Name" slug="first_name" required={true}/> 
					<InputField appSlug={this.props.appSlug} label="Last Name" slug="last_name" /> 
					<InputField appSlug={this.props.appSlug} label="Phone" slug="phone" /> 
					<InputField appSlug={this.props.appSlug} label="Street" slug="street" /> 
					<InputField appSlug={this.props.appSlug} label="City/State" slug="citystate" /> 
					<InputField appSlug={this.props.appSlug} label="Zip Code" slug="zip" /> 
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
						appSlug={this.props.appSlug}
					/> 
					<InputField
						label="What is your desired hourly/salary range?"
						slug="salary"
						appSlug={this.props.appSlug}
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
						appSlug={this.props.appSlug}
					/>
					<InputField
						label="Were you referred by someone? If yes, who?"
						slug="referred_by"
						appSlug={this.props.appSlug}
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
				{this.applicationStatus()}
			</div>
		); 
	} 
	applicationStatus () {
		if (!this.props.loading && this.props.application.length) {
			const app = this.props.application[0]; 

			for (var i=0; i < app.fields.length; i++){
				if (app.fields[i].isEmpty) {
					return (
						<h3> Form Incomplete </h3>
					);  
				}
			}

			return (
				<h3> Form Complete </h3>
			); 

		}
	}
}

export default createContainer ((props) => {
	const appSlug = 'nanny_application'; 
	const handle = Meteor.subscribe('applications'); 
	const user = Meteor.user(); 
	const loading = !handle.ready(); 
	const application = Applications.find({slug: appSlug}).fetch(); 

	return {
		appSlug, 
		user, 
		loading, 
		application 
	}; 
}, NannyApplication); 
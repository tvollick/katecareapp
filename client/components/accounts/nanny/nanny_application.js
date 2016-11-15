import React, { Component } from 'react'; 

class NannyApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { error: '', isLegal: true, position: 'full_time', liveInOut: 'any', hasAllergies: 'false' }; 
	}


	handleIsLegal(){
		this.setState({isLegal:true}); 
	}
	handleIsNotLegal(){
		this.setState({isLegal:false}); 
	}
	handlePositionChange(e){
		this.setState({position: e.target.value}); 
	}
	handleLiveInOutChange (e) { 
		this.setState({liveInOut: e.target.value}); 
	}
	handleAllergiesChange (e) { 
		this.setState({hasAllergies: e.target.value}); 
	}

	handleSubmit (event) {
		event.preventDefault(); 
			var AppData = {
				firstname: this.refs.firstname.value, 
				lastname: this.refs.lastname.value, 
				phone: this.refs.phone.value,  
				street: this.refs.street.value,  
				citystate: this.refs.citystate.value,  
				zip: this.refs.zip.value,  
				isLegal: this.state.isLegal, 
				isLegalExplanation: this.refs.isLegalExplanation.value, 
				availability: this.refs.availability.value, 
				position: this.state.position, 
				liveInOut: this.state.liveInOut, 
				hasAllergies: this.state.hasAllergies, 
				hasAllergiesDetails: this.refs.hasAllergiesDetails.value, 
				desiredSalary: this.refs.salary.value
			}; 

			Meteor.call('nannies.apply',this.props.userId, AppData, (error) => {
				if (error) {
					alert(error); 
					console.log(error); 
					this.setState({error: 'Complete All Information'}); 
				} else {
					this.setState({error: ''}); 

					// send notification to admin here? 

					// loop through and reset values in forms 
					for (var property in this.refs) { 
						if (this.refs.hasOwnProperty(property)) { 
							this.refs[property].value = '';  
						}
					}
				}
			}); 
		// call meteor method 
	}

	render () {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="row">
						<div className="form-group col-sm-4">
							<label> First Name </label>
							<input ref="firstname" className="form-control" /> 
						</div>

						<div className="form-group col-sm-4">
							<label> Last Name </label>
							<input ref="lastname" className="form-control" /> 
						</div>
						<div className="form-group col-sm-4">
							<label> Phone Number: </label>
							<input ref="phone" className="form-control" /> 
						</div>
					</div>
					<h4> Address </h4> 
					<div className="row"> 
						<div className="form-group col-sm-4">
							<label> Street </label> 
							<input ref="street" className="form-control" /> 
						</div> 
						<div className="form-group col-sm-4">
							<label> City/State </label> 
							<input ref="citystate" className="form-control" /> 
						</div> 
						<div className="form-group col-sm-4">
							<label> Zip Code </label> 
							<input ref="zip" className="form-control" /> 
						</div> 
					</div> 
					<div className="form-group"> 
						<label> Can you Legally Work in the US?</label> 
						<div className="radio radio-group">
							<label><input type="radio" name="legal" onClick={this.handleIsLegal.bind(this)} value="true" />Yes</label>
							<label><input type="radio" name="legal" onClick={this.handleIsNotLegal.bind(this)} value="false" />No</label>
						</div> 
						<label> If you answered yes, please explain your authorization(legal resident, visa etc.) </label> 
						<textarea className="form-control" ref="isLegalExplanation" /> 
					</div> 
					<div className="form-group"> 
						<label> Please explain the times you are available and the dates you can start: </label> 
						<textarea className="form-control" ref="availability" /> 
					</div> 
					<div className="form-group"> 
						<label> What position are you looking for? </label> 
						<select className="form-control" value={this.state.position} onChange={this.handlePositionChange.bind(this)}>
							<option value="full_time"> Full Time </option> 
							<option value="part_time"> Part Time </option> 
							<option value="very_part_time"> Very Part Time </option> 
							<option value="summer"> Summer</option> 
							<option value="any"> Any </option> 
						</select> 
					</div> 
					<div className="form-group"> 
						<label> Are you looking for a live in or live out position? </label> 
						<select className="form-control" value={this.state.liveInOut} onChange={this.handleLiveInOutChange.bind(this)}>
							<option value="live_in"> Live In</option>
							<option value="live_out"> Live Out</option>
							<option value="any"> Any </option> 
						</select> 
					</div> 		
					<div className="form-group"> 
						<label> Do you have any allergies(dogs,cats, etc.?) </label> 
						<select className="form-control" value={this.state.hasAllergies} onChange={this.handleAllergiesChange.bind(this)}>
							<option value="false"> No Allergies </option> 
							<option value="true"> Yes, I have the following allergies. </option>  
						</select> 
						<input className="form-control" ref="hasAllergiesDetails" /> 
					</div> 		
					<div className="form-group"> 
						<label> What is your desired hourly/ salary range? </label> 
						<input className="form-control" ref="salary" /> 
					</div> 	
					<div className="text-danger">{this.state.error}</div>
					<button className="btn btn-primary"> Submit Application </button>
				</form>
			</div>
		); 
	} 
}

export default NannyApplication; 
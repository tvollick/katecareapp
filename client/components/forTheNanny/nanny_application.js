import React, { Component } from 'react'; 

class NannyApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { error: '' }; 
	}

	handleSubmit (event) {
		event.preventDefault(); 

			console.log(this.refs.legalUS.value); 

			var AppData = {
				firstname: this.refs.firstname.value, 
				lastname: this.refs.lastname.value, 
				phone: this.refs.phone.value,  
				street: this.refs.street.value,  
				citystate: this.refs.citystate.value,  
				zip: this.refs.zip.value,  
			}; 

			Meteor.call('nannies.apply', AppData, (error) => {
				if (error) {
					alert(error); 
					console.log(error); 
					this.setState({error: 'Complete All Information'}); 
				} else {
					this.setState({error: ''}); 

					// can we loop through fields to reset? 
					this.refs.firstname.value = ''; 
					this.refs.lastname.value = ''; 
					this.refs.phone.value = ''; 
				}
			}); 
		// call meteor method 
	}

	render () {
		return (
			<div>
				<h3> Nanny Application </h3> 
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
							<label><input type="radio" name="legal" ref="legalUS" value="true" />Yes</label>
							<label><input type="radio" name="legal" ref="legalUS" value="false" />No</label>
						</div> 
						<label> If you answered yes, please explain your authorization(legal resident, visa etc.) </label> 
						<textarea className="form-control" ref="legalUsExplanation" /> 
					</div> 
					<div className="form-group"> 
						<label> Please explain the times you are available and the dates you can start: </label> 
						<textarea className="form-control" ref="startTimes" /> 
					</div> 
					<div className="text-danger">{this.state.error}</div>
					<button className="btn btn-primary"> Submit Application </button>
				</form>
			</div>
		); 
	} 
}

export default NannyApplication; 
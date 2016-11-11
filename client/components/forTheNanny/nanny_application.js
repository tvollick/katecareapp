import React, { Component } from 'react'; 

class NannyApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { error: '' }; 
	}

	handleSubmit (event) {
		event.preventDefault(); 

		// find better validation solution; 
		if (
			this.refs.firstname.value ==='' ||
			this.refs.lastname.value ===''
			) {
			this.setState({error: 'Complete all fields'}); 
			return; 
		} else { 

			var AppData = {
				firstname: this.refs.firstname.value, 
				lastname: this.refs.lastname.value 
			}; 

			Meteor.call('nannies.apply', AppData, (error) => {
				if (error) {
					this.setState({error: 'Complete All Information'}); 
				} else {
					this.setState({error: ''}); 
					this.refs.firstname.value = ''; 
					this.refs.lastname.value=''; 
				}
			}); 

		}
		// call meteor method 
	}

	render () {
		return (
			<div>
				<h3> Nanny Application </h3> 
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label> First Name </label>
						<input ref="firstname" className="form-control" /> 
					</div>

					<div className="form-group">
						<label> Last Name </label>
						<input ref="lastname" className="form-control" /> 
					</div>

					<div className="text-danger">{this.state.error}</div>
					<button className="btn btn-primary"> Submit Application </button>
				</form>
			</div>
		); 
	} 
}

export default NannyApplication; 
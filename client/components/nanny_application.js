import React, { Component } from 'react'; 

class NannyApplication extends Component {
	constructor (props) {
		super (props); 
		this.state = { error: '' }; 
	}

	handleSubmit (event) {
		event.preventDefault(); 

		var Appl = {
			firstname: this.refs.firstname.value 
		}; 

		Meteor.call('nannies.apply', Appl, (error) => {
			if (error) {
				this.setState({error: 'Complete All Information'}); 
			} else {
				this.setState({error: ''}); 
				this.refs.firstname.value = ''; 
			}
		}); 

		// call meteor method 
		console.log('submit'); 
	}

	render () {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div className="form-group">
						<label> First Name </label>
						<input ref="firstname" className="form-control" /> 
					</div>
					<div className="text-danger">{this.state.error}</div>
					<button className="btn btn-primary"> Submit Application </button>
				</form>
			</div>
		); 

	}; 

}

export default NannyApplication; 